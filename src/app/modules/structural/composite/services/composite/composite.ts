type ElState = {
  rawName: string;
  name: Symbol;
  msg: string;
  errMsg: string;
  renderer: Array<string>;
};

interface Graphic {
  state: ElState;

  addElement(elem: Graphic): void | Error;

  drawEl(): void;

  getChild(elem: Graphic): Graphic | Error;

  getChildren(): Map<Symbol, Graphic> | Error;

  removeEl(): void | Error;
}

abstract class VectorGraphicEl implements Graphic {
  public state: ElState = {
    rawName: '',
    name: Symbol(),
    msg: '',
    errMsg: 'No such method',
    renderer: []
  };

  abstract drawEl(): void;

  addElement(elem: Graphic): void | Error {
    return new Error(this.state.errMsg);
  }

  getChild(elem: Graphic): Graphic | Error {
    return new Error(this.state.errMsg);
  }

  getChildren(): Map<Symbol, Graphic> | Error {
    return new Error(this.state.errMsg);
  }

  removeEl(): void | Error {
    return new Error(this.state.errMsg);
  }
}

export class PrimitiveEl extends VectorGraphicEl {
  constructor(name: string) {
    super();
    this.state.name = Symbol(name);
    this.state.msg = `Element ${name} rendered`;
    this.state.rawName = name;
    this.drawEl();
  }

  drawEl(): void {
    this.state.renderer.push(this.state.msg);
  }
}

interface Node {
  nodes: Map<Symbol, Graphic>;
}

export class ComplexEl implements Graphic, Node {
  public state: ElState = {
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

  drawEl(): void {
    this.state.renderer.push(this.state.msg);
  }

  addElement(elem: Graphic): void | Error {
    this.nodes.set(elem.state.name, elem);
  }

  getChild(elem: Graphic): Graphic | Error {
    const n: ElState = elem.state;
    return this.nodes.has(n.name) ? this.nodes.get(n.name) : new Error(`Element \'${n.rawName}\' does not exists!`);
  }

  getChildren(): Map<Symbol, Graphic> | Error {
    return this.nodes;
  }

  removeEl(): void | Error {
    this.nodes.delete(this.state.name);
  }
}
