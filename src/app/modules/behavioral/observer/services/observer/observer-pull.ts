export function pullObserver() {
  const sub = new ConcreteSubject();
  sub.attach(new Observer1(sub));
  sub.attach(new Observer2(sub));
  sub.state = 'Some state...';
  // sub.notify();
}

abstract class Subject {
  protected observersList: Map<string, Observer> = new Map<string, Observer>();

  public attach(obs: Observer) {
    this.observersList.set(obs.name, obs);
  }

  public detach(obs: Observer) {
    this.observersList.delete(obs.name);
  }

  public notify() {
    this.observersList.forEach(v => v.update());
  }
}

export class ConcreteSubject extends Subject {
  private _state: string;

  set state(d: string) {
    this._state = d;
  }

  get state() {
    return this._state;
  }
}

abstract class Observer {
  public name: string;
  protected _state: string;
  public get state() {
    return this._state;
  }

  public set state(d: any) {
    this._state = d;
  }

  abstract update(): void;
}

export class Observer1 extends Observer {
  public name = 'Observer 1';

  constructor(private subject: ConcreteSubject) {
    super();
  }

  public update() {
    this.state = this.subject.state;
    console.log('Observer 1', this.state);
  }
}

export class Observer2 extends Observer {
  public name = 'Observer 2';

  constructor(private subject: ConcreteSubject) {
    super();
  }

  public update() {
    this.state = this.subject.state;
    console.log('Observer 2', this.state);
  }
}
