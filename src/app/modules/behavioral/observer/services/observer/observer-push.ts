export function pushObserver() {
  const subj = new PushConcreteSubject();
  subj.attach(new PushObserver1());
  subj.attach(new PushObserver2());
  subj.state = 'Some state for push example';
  // subj.notify();
}

abstract class Subject {
  protected observersList = new Map<string, Observer>();

  public attach(observer: Observer): void {
    this.observersList.set(observer.name, observer);
  }

  public detach(observer: Observer) {
    this.observersList.delete(observer.name);
  }

  public abstract notify(): void;
}

export class PushConcreteSubject extends Subject {
  private _state: string;

  get state(): string {
    return this._state;
  }

  set state(d: string) {
    this._state = d;
  }

  public notify(): void {
    this.observersList.forEach(v => v.update(this.state));
  }
}

abstract class Observer {
  public name: string;

  public abstract update(state: string): void;
}

export class PushObserver1 {
  public name = 'Observer 1';
  private observerState: string;

  public update(state: string) {
    this.observerState = state;
    console.log('Observer 1', this.observerState);
  }
}

export class PushObserver2 {
  public name = 'Observer 2';
  private observerState: string;

  public update(state: string) {
    this.observerState = state;
    console.log('Observer 2', this.observerState);
  }
}
