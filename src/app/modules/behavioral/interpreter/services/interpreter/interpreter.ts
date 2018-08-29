import {highLightVocabulary, Vocabulary} from './vocabulary';

const space = '&nbsp;';

export function interpreter(d: string = 'function'): any {
  const context = new Context();
  context.vocabulary = new Map(highLightVocabulary);
  context.source = d.split(/(?=(\s+))\n+/g);
  const lD = new LineDivider();
  lD.interpret(context);
  return context.result.join(' ');
}

class Context {
  private _buffer: string;
  private _result: Array<string> = [];
  private _vocabulary: Vocabulary;
  private _source: Array<any>;
  private _check: boolean;
  private _position = 0;

  public set buffer(d: string) {
    this._buffer = d;
  }

  public get buffer(): string {
    return this._buffer;
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
  }
}

class LineDivider extends Expression {
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
  protected CheckVocabulary: Expression;

  public interpret(c: Context): void {
    if (c.position < c.source.length) {
      c.source[c.position] = c.source[c.position].split(/(?=(\W))\W/g);
      c.result.push('<div>');
      c.source[c.position].forEach((v) => {
        c.buffer = v;
        const f = v.trim().length;
        if (v.length && f >= 0) {
          this.CheckVocabulary = new CheckVocabulary();
          this.CheckVocabulary.interpret(c);
          if (c.check) {
            c.result.push(c.vocabulary.get(c.buffer));
          } else if (f === 0) {
            c.result.push(new Array(c.buffer.length).fill(space).join(''));
          } else {
            c.result.push(c.buffer);
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
