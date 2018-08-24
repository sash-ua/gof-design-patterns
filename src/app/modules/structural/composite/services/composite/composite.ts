export function composite() {
  const picture = new ComplexEl('Root');
  const line = new PrimitiveEl('line');
  const circle = new PrimitiveEl('circle');
  const pip = new ComplexEl('canvas1');
  const lineInPip = new PrimitiveEl('line');
  const outPictureEl = new PrimitiveEl('out');
  pip.addElement(lineInPip);
  picture.addElement(line);
  picture.addElement(circle);
  picture.addElement(pip);
  // console.log(picture.getChild(line));
  // console.log(picture.getChildren());
  // console.log(picture.getChild(outPictureEl));
}

interface ElState {
  rawName: string;
  name: Symbol;
  msg: string;
  errMsg: string;
  renderer: Array<string>;
}

interface Graphic {
  state: ElState;

  addElement(elem: Graphic): void | Error;

  drawEl(): void;

  getChild(elem: Graphic): Graphic | Error;

  getChildren(): Map<Symbol, Graphic> | Error;

  removeEl(): void | Error;
}

abstract class VectorGraphicEl implements Graphic {
  protected _state: ElState = {
    rawName: '',
    name: Symbol(),
    msg: '',
    errMsg: 'No such method',
    renderer: []
  };
  abstract drawEl(): void;

  public get state() {
    return this._state;
  }

  public addElement(elem: Graphic): void | Error {
    return new Error(this.state.errMsg);
  }

  public getChild(elem: Graphic): Graphic | Error {
    return new Error(this.state.errMsg);
  }

  public getChildren(): Map<Symbol, Graphic> | Error {
    return new Error(this.state.errMsg);
  }

  public removeEl(): void | Error {
    return new Error(this.state.errMsg);
  }
}

class PrimitiveEl extends VectorGraphicEl {
  constructor(name: string) {
    super();
    this.state.name = Symbol(name);
    this.state.msg = `Element ${name} rendered`;
    this.state.rawName = name;
    this.drawEl();
  }

  public drawEl(): void {
    this.state.renderer.push(this.state.msg);
  }
}

interface Node {
  nodes: Map<Symbol, Graphic>;
}

export class ComplexEl implements Graphic, Node {
  protected _state: ElState = {
    rawName: '',
    name: Symbol(),
    msg: '',
    errMsg: 'No such method',
    renderer: []
  };

  public nodes: Map<Symbol, Graphic> = new Map();

  constructor(name: string) {
    this.state.name = Symbol(name);
    this.state.msg = `Complex element ${name} rendered`;
    this.drawEl();
    this.state.rawName = name;
  }
  public get state() {
    return this._state;
  }

  public drawEl(): void {
    this.state.renderer.push(this.state.msg);
  }

  public addElement(elem: Graphic): void | Error {
    this.nodes.set(elem.state.name, elem);
  }

  public getChild(elem: Graphic): Graphic | Error {
    const n: ElState = elem.state;
    return this.nodes.has(n.name) ? this.nodes.get(n.name) : new Error(`Element \'${n.rawName}\' does not exists!`);
  }

  public getChildren(): Map<Symbol, Graphic> | Error {
    return this.nodes;
  }

  public removeEl(): void | Error {
    this.nodes.delete(this.state.name);
  }
}
