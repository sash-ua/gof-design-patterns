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
  private subjectState: string;

  get state(): string {
    return this.subjectState;
  }

  set state(state: string) {
    this.subjectState = state;
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
