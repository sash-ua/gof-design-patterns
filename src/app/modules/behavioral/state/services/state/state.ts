export function state() {
  const man = new Man();
  // man.behavior(); // 'Morning routine' by default
  // man.behavior(Time.evening); // morning -> noon, therefore state does not changed
  // man.behavior(Time.noon);  // 'Noon routine'
}

export enum Time {
  morning,
  noon,
  evening,
  night
}

type TimeRoutine = Time.morning | Time.night | Time.noon | Time.evening;

class Man {
  private manState: State;

  constructor() {
    this.manState = new MorningState();
  }

  public set state(s: State) {
    this.manState = s;
  }

  public get state() {
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
  protected abstract changeState(man: Man, time: TimeRoutine): void;

  public handleState(man: Man, time: TimeRoutine) {
    this.changeState(man, time);
  }

  public abstract routine();
}

class MorningState extends State {
  public routine() {
    console.log('Morning routine');
  }

  protected changeState(man: Man, time: TimeRoutine) {
    if (Time.noon === time) {
      man.state = new NoonState();
    }
  }
}

class NoonState extends State {
  public routine() {
    console.log('Noon routine');
  }

  protected changeState(man: Man, time: TimeRoutine) {
    if (Time.evening === time) {
      man.state = new EveningState();
    }
  }
}

class EveningState extends State {
  public routine() {
    console.log('Evening routine');
  }

  protected changeState(man: Man, time: TimeRoutine) {
    if (Time.night === time) {
      man.state = new NightState();
    }
  }
}

class NightState extends State {
  public routine() {
    console.log('Night routine');
  }

  protected changeState(man: Man, time: TimeRoutine) {
    if (Time.morning === time) {
      man.state = new MorningState();
    }
  }
}
