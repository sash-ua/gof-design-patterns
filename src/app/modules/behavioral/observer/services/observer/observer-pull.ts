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
  private subState: string;

  set state(d: string) {
    this.subState = d;
  }

  get state() {
    return this.subState;
  }
}

abstract class Observer {
  public name: string;
  protected obsState: string;

  abstract update(): void;
}

export class Observer1 extends Observer {
  public name = 'Observer 1';

  constructor(private subject: ConcreteSubject) {
    super();
  }

  public update() {
    this.obsState = this.subject.state;
    console.log('Observer 1', this.obsState);
  }
}
export class Observer2 extends Observer {
  public name = 'Observer 2';

  constructor(private subject: ConcreteSubject) {
    super();
  }

  public update() {
    this.obsState = this.subject.state;
    console.log('Observer 2', this.obsState);
  }
}
