export function abstractFactory() {
  const fiesta = makeCar({name: 'Fiesta', power: 70});
  const focus = makeCar({name: 'Focus', power: 80});
  const mustang = makeCar({name: 'mustang', power: 120});
  // console.log('AbstractFactory:', fiesta);
  // console.log('AbstractFactory:', focus);
  // console.log('AbstractFactory:', mustang);
}

function makeCar(obj: Car): string {
  const factory = new FiestaFocusCarFactory();
  return factory.createCar(obj);
}

export interface Car {
  name: string;
  power: number;
}

interface CarFactory {
  createCar(obj: Car): string;
}

class FiestaFocusCarFactory implements CarFactory {
  constructor() {
  }

  public createCar(obj: Car): string {
    const {name, power} = obj;
    const eng = new EngineFactory(power).enginePower();
    const bw = new BodyworkFactory(name).bodyworkType();
    return bw ? `New car ${name}. ${eng}. ${bw}.` : 'This type of a car can\'t be produced on the factory!';
  }
}

interface Engine {
  enginePower(): string;
}

class EngineFactory implements Engine {
  constructor(public power: number) {
  }

  enginePower(): string {
    return `Power: ${this.power} kVt`;
  }
}

interface Bodywork {
  bodyworkType(): string | false;
}

class BodyworkFactory implements Bodywork {
  private typeFiesta = 'Fiesta';
  private typeFocus = 'Focus';

  constructor(public name: string) {
  }

  bodyworkType(): string | false {
    let car: string | false;
    switch (this.name) {
      case 'Fiesta':
        car = `Bodywork type: ${this.typeFiesta}`;
        break;
      case 'Focus':
        car = `Bodywork type: ${this.typeFocus}`;
        break;
      default:
        car = false;
        break;
    }
    return car;
  }
}
