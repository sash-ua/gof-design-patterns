export class Originator {
  private originState: any;

  set state(d: any) {
    this.originState = d;
  }

  get state() {
    return this.originState;
  }

  setMemento(m: Memento): void {
    this.originState = m.state;
  }

  createMemento(): Memento {
    return new Memento(this.state);
  }
}

export class Memento {
  private stateVault: any;

  constructor(private originState: Originator) {
    this.stateVault = this.originState;
  }

  get state() {
    return this.stateVault;
  }
}

export class CareTaker {
  private state: Memento;

  set memento(m: Memento) {
    this.state = m;
  }

  get memento() {
    return this.state;
  }
}
