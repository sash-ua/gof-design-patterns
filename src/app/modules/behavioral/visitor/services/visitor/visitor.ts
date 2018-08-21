import {visitValue} from '@angular/compiler/src/util';

abstract class Visitor {
  public abstract visitElementA(elA: ElementA);

  public abstract visitElementB(elB: ElementB);
}

export class VisitorAlfa extends Visitor {
  private name = 'Alfa visitor';
  public visitElementA(el: ElementA): void {
    el.runA(this.name);
  }

  public visitElementB(el: ElementB): void {
    el.runB(this.name);
  }
}

export class VisitorBeta extends Visitor {
  private name = 'Beta visitor';
  public visitElementA(el: ElementA): void {
    el.runA(this.name);
  }

  public visitElementB(el: ElementB): void {
    el.runB(this.name);
  }
}

abstract class Element {
  protected elName: string;
  public name;

  public abstract accept(visitor: Visitor): void;
}

export class ElementA extends Element {
  protected elName = 'Element A';

  public get name() {
    return this.elName;
  }

  public accept(visitor: Visitor): void {
    visitor.visitElementA(this);
  }

  public runA(visitorName: string): void {
    console.log(`${this.elName} executed by ${visitorName}`);
  }
}

export class ElementB extends Element {
  protected elName = 'Element B';

  public get name() {
    return this.elName;
  }

  public accept(visitor: Visitor): void {
    visitor.visitElementB(this);
  }

  public runB(visitorName: string): void {
    console.log(`${this.elName} executed by ${visitorName}`);
  }
}

export class ElementsController {
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
