export enum Time {
  morning,
  noon,
  evening,
  night
}

type TimeRoutine = Time.morning | Time.night | Time.noon | Time.evening;


export class Man {
  private manState: State;

  constructor() {
    this.manState = new MorningState();
  }

  set state(s: State) {
    this.manState = s;
  }

  get state() {
    return this.manState;
  }

  public behavior(time?: TimeRoutine): void {
    if (!time) {
      time = Time.morning;
    }
    this.manState.handleState(this, time);
    this.manState.routine();
  }
}

abstract class State {
  public handleState(man: Man, time: TimeRoutine) {
    this.changeState(man, time);
  }

  public abstract routine();

  protected abstract changeState(man: Man, time: TimeRoutine): void;
}

export class MorningState extends State {
  public routine() {
    console.log('Morning routine');
  }

  protected changeState(man: Man, time: TimeRoutine) {
    switch (time) {
      case Time.noon:
        man.state = new NoonState();
        break;
      default:
        man.state = this;
    }
  }
}

export class NoonState extends State {
  public routine() {
    console.log('Noon routine');
  }

  protected changeState(man: Man, time: TimeRoutine) {
    switch (time) {
      case Time.evening:
        man.state = new EveningState();
        break;
      default:
        man.state = this;
    }
  }
}

export class EveningState extends State {
  public routine() {
    console.log('Evening routine');
  }

  protected changeState(man: Man, time: TimeRoutine) {
    switch (time) {
      case Time.night:
        man.state = new NightState();
        break;
      default:
        man.state = this;
    }
  }
}

export class NightState extends State {
  public routine() {
    console.log('Night routine');
  }

  protected changeState(man: Man, time: TimeRoutine) {
    switch (time) {
      case Time.morning:
        man.state = new MorningState();
        break;
      default:
        man.state = this;
    }
  }
}
