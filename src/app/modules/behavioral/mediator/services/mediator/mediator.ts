abstract class Mediator {
  public c1: Colleague;
  public c2: Colleague;

  abstract send(msg: string, colleague: Colleague): void;
}

export class ConcretMediator extends Mediator {
  public c1: Colleague;
  public c2: Colleague;

  public send(msg: string, colleague: Colleague): void {
    this.c1 === colleague ? this.c2.notify(msg) : this.c1.notify(msg);
  }
}

abstract class Colleague {
  constructor(public mdr: Mediator) {
  }

  abstract send(msg: string);

  abstract notify(msg: string);
}

export class Colleague1 extends Colleague {
  send(msg: string) {
    this.mdr.send(msg, this);
  }

  notify(msg: string) {
    console.log('Colleague1', msg);
  }
}

export class Colleague2 extends Colleague {
  send(msg: string) {
    this.mdr.send(msg, this);
  }

  notify(msg: string) {
    console.log('Colleague2', msg);
  }
}
