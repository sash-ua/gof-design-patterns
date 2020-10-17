export function mediatorE() {
  const mediator = new ConcretMediator();
  const coll1 = new Colleague1(mediator);
  const coll2 = new Colleague2(mediator);
  mediator.c1 = coll1;
  mediator.c2 = coll2;
  coll1.send('msg from 1');
  coll2.send('msg from 2');
}

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
  public constructor(public mediator: Mediator) {
  }

  abstract send(msg: string);

  abstract notify(msg: string);
}

export class Colleague1 extends Colleague {
  send(msg: string) {
    this.mediator.send(msg, this);
  }

  notify(msg: string) {
    console.log('Colleague1', msg);
  }
}

export class Colleague2 extends Colleague {
  send(msg: string) {
    this.mediator.send(msg, this);
  }

  notify(msg: string) {
    console.log('Colleague2', msg);
  }
}
