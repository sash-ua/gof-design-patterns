import {comboVocabulary, highLightVocabulary, Vocabulary} from './vocabulary';

const SPACE = '&nbsp;';

export function interpreter(d: string): any {
  const context = new Context();
  context.vocabulary = new Map(highLightVocabulary);
  context.comboVocabulary = new Map(comboVocabulary);
  context.buffer = d;
  const rd = new Interpreter();
  rd.interpret(context);
  return context.result.join(' ');
}

class Context {
  private _unsafeBuffer: string;
  private _result: Array<string> = [];
  private _vocabulary: Vocabulary;
  private _comboVocabulary: Vocabulary;
  private _source: Array<any>;
  private _check: boolean;
  private _comboInitiator: string;
  private _position = 0;

  public set buffer(d: string) {
    this._unsafeBuffer = d;
  }

  public get buffer(): string {
    return this._unsafeBuffer;
  }

  public get result(): Array<string> {
    return this._result;
  }

  public set vocabulary(d: Vocabulary) {
    this._vocabulary = d;
  }

  public get vocabulary(): Vocabulary {
    return this._vocabulary;
  }

  public set comboVocabulary(d: Vocabulary) {
    this._comboVocabulary = d;
  }

  public get comboVocabulary(): Vocabulary {
    return this._comboVocabulary;
  }

  public set source(d: Array<any>) {
    this._source = d;
  }

  public get source(): Array<any> {
    return this._source;
  }

  public set check(d: boolean) {
    this._check = d;
  }

  public get check(): boolean {
    return this._check;
  }

  public set comboInitiator(d: string) {
    this._comboInitiator = d;
  }

  public get comboInitiator(): string {
    return this._comboInitiator;
  }

  public set position(d: number) {
    this._position = d;
  }

  public get position(): number {
    return this._position;
  }
}

abstract class Expression {
  public abstract interpret(context: Context): void;
}

class CheckVocabulary extends Expression {
  public interpret(context: Context): void {
    context.check = context.vocabulary.has(context.buffer);
    if (context.comboVocabulary.has(context.buffer) && context.check && !context.comboInitiator) {
      context.comboInitiator = context.buffer;
    } else if (context.check && context.comboInitiator){
      context.comboInitiator = null;
    }
  }
}

class Interpreter extends Expression {
  public interpret(c: Context) {
    new RowCutter().interpret(c);
    new HtmlBuilder().interpret(c);
  }
}

class RowCutter extends Expression {
  public interpret(context: Context): void {
    context.source = context.buffer
      .split(/(?=(\s+))\n+/g)
      .map(v => v.charCodeAt(0) !== 10 ? v : '');
  }
}

class HtmlBuilder extends Expression {
  public interpret(c: Context): void {
    if (c.position < c.source.length) {
      c.source[c.position] = c.source[c.position].split(/(?=(\W))\W/g);
      c.result.push('<div>');
      new Shaper().interpret(c);
      c.result.push('</div>');
      c.position++;
      new HtmlBuilder().interpret(c);
    }
  }
}

class Shaper extends Expression {
  public interpret(c: Context): void {
    c.source[c.position].forEach((v) => {
      c.buffer = v;
      const f = v.trim().length;
      if (f > 0) {
        new CheckVocabulary().interpret(c);
        if (c.check ) {
          c.result.push(c.vocabulary.get(c.buffer));
        } else if (c.comboInitiator && !c.check) {
          c.result.push(`<span style="color: ${c.comboVocabulary.get(c.comboInitiator)}">${c.buffer}</span>`);
          c.comboInitiator = null;
        } else {
          c.result.push(c.buffer);
        }
      } else if (f === 0) {
        c.result.push(new Array(c.buffer.length).fill(SPACE).join(''));
      }
    });
  }
}
