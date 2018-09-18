import {comboVocabulary, highLightVocabulary, Vocabulary} from './vocabulary';

const space = '&nbsp;';

export function interpreter(d: string = 'function'): any {
  const context = new Context();
  context.vocabulary = new Map(highLightVocabulary);
  context.comboVocabulary = new Map(comboVocabulary);
  context.buffer = d;
  const rd = new RowDivider();
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
  private _combo: string;
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

  public set combo(d: string) {
    this._combo = d;
  }

  public get combo(): string {
    return this._combo;
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

class StartCombinations extends Expression {
  interpret(context: Context) {
    if (context.comboVocabulary.has(context.buffer) && context.check) {
      context.combo = context.buffer;
    }
  }
}

class CheckVocabulary extends Expression {
  public interpret(context: Context): void {
    context.check = context.vocabulary.has(context.buffer);
  }
}

class RowDivider extends Expression {
  private wd = new WordDivider();

  public interpret(c: Context) {
    c.source = c.buffer.split(/(?=(\s+))\n+/g);
    this.wd.interpret(c);
  }
}

class WordDivider extends Expression {
  private highlight: Highlighter;

  public interpret(c: Context): void {
    c.source = c.source.map(v => {
      return v.charCodeAt(0) !== 10 ? v : '';
    });
    this.highlight = new Highlighter();
    this.highlight.interpret(c);
  }
}

class Highlighter extends Expression {
  protected highlighter: Expression;
  protected checkVocabulary: Expression;
  protected combo: Expression;

  public interpret(c: Context): void {
    if (c.position < c.source.length) {
      c.source[c.position] = c.source[c.position].split(/(?=(\W))\W/g);
      c.result.push('<div>');
      c.source[c.position].forEach((v) => {
        c.buffer = v;
        const f = v.trim().length;
        if (f >= 0) {
          if (f > 0) {
            this.checkVocabulary = new CheckVocabulary();
            this.checkVocabulary.interpret(c);
            this.combo = new StartCombinations();
            this.combo.interpret(c);
            if (c.check) {
              c.result.push(c.vocabulary.get(c.buffer));
            } else if (c.combo) {
              c.result.push(`<span style="color: ${c.comboVocabulary.get(c.combo)}">${c.buffer}</span>`);
              c.combo = null;
            } else {
              c.result.push(c.buffer);
            }
          } else if (f === 0) {
            c.result.push(new Array(c.buffer.length).fill(space).join(''));
          }
        }
      });
      c.result.push('</div>');
      c.position++;
      this.highlighter = new Highlighter();
      this.highlighter.interpret(c);
    }
  }
}
