export function visitior() {
  const controller = new ElementsController();
  controller.add(new ElementA());
  controller.add(new ElementB());
  controller.accept(new VisitorAlfa());
  controller.accept(new VisitorBeta());
}

abstract class Visitor {
  public abstract visitElementA(elA: ElementA);

  public abstract visitElementB(elB: ElementB);
}

class VisitorAlfa extends Visitor {
  private name = 'Alfa visitor';
  public visitElementA(el: ElementA): void {
    el.runA(this.name);
  }

  public visitElementB(el: ElementB): void {
    el.runB(this.name);
  }
}

class VisitorBeta extends Visitor {
  private name = 'Beta visitor';
  public visitElementA(el: ElementA): void {
    el.runA(this.name);
  }

  public visitElementB(el: ElementB): void {
    el.runB(this.name);
  }
}

abstract class Element {
  protected _name: string;
  abstract name;

  public abstract accept(visitor: Visitor): void;
}

class ElementA extends Element {
  protected _name = 'Element A';

  public get name() {
    return this._name;
  }

  public accept(visitor: Visitor): void {
    visitor.visitElementA(this);
  }

  public runA(visitorName: string): void {
    console.log(`${this._name} executed by ${visitorName}`);
  }
}

class ElementB extends Element {
  protected _name = 'Element B';

  public get name() {
    return this._name;
  }

  public accept(visitor: Visitor): void {
    visitor.visitElementB(this);
  }

  public runB(visitorName: string): void {
    console.log(`${this._name} executed by ${visitorName}`);
  }
}

class ElementsController {
  private elements: Map<string, Element> = new Map<string, Element>();

  public add(elem: Element): void {
    this.elements.set(elem.name, elem);
  }

  public remove(elem: Element): void {
    this.elements.delete(elem.name);
  }

  public accept(visitor: Visitor) {
    this.elements.forEach(v => v.accept(visitor));
  }
}
