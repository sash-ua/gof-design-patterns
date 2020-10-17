export function memento() {
  const originator = new Originator();
  originator.state = 'ONE STATE';
  console.log('init.: ', originator.state);
  const caretaker = new CareTaker();
  caretaker.memento = originator.createMemento();
  originator.state = 'another state';
  console.log('originator set another state: ', originator.state);
  originator.setMemento(caretaker.memento);
  console.log('return state from memento to originator: ', originator.state);
}

export class Originator {
  private _state: any;

  set state(d: any) {
    this._state = d;
  }

  get state() {
    return this._state;
  }

  setMemento(m: Memento): void {
    this._state = m.state;
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
