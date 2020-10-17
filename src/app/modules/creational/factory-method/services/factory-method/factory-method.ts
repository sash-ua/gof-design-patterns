export function createProduct(name) {
  switch (name) {
    case 'Mustang ':
      return new MustangFactory().createProduct();
    case 'Mustang turbo':
      return new MustangFactory().createProduct(true);
    case 'Focus':
      return new FocusFactory().createProduct();
    default:
      return 'You should create a relevant Factory';
  }
}

export function factoryMethod() {
  const mustang = createProduct('Mustang');
  const mustangTurbo = createProduct('Mustang turbo');
  const focus = createProduct('Focus');
  console.log(mustang);
  console.log(mustangTurbo);
  console.log(focus);
}

interface EveryCar {
  name: string;
  speedLimit: number;

  start(): boolean;

  speedUp(speed: number): boolean;
}

abstract class Car implements EveryCar {
  public name: string;
  public speedLimit: number;

  public start(): boolean {
    return true;
  }

  abstract speedUp(speed: number): boolean;
}

class FocusCar extends Car {
  public name = 'Fiesta';
  public speedLimit = 200;

  constructor() {
    super();
  }

  public speedUp(speed: number): boolean {
    return speed <= this.speedLimit;
  }
}

class MustangCar extends Car {
  public name = 'Mustang';
  public speedLimit: number;

  constructor(public turboVersion: boolean) {
    super();
    this.speedLimit = turboVersion ? 280 : 250;
  }

  public speedUp(speed: number): boolean {
    return speed <= this.speedLimit;
  }
}

interface ProductFactory {
  createProduct(): EveryCar;
}

abstract class CarFactory implements ProductFactory {
  abstract createProduct(): EveryCar;
}

export class FocusFactory extends CarFactory {
  public createProduct(): EveryCar {
    return new FocusCar();
  }
}

class MustangFactory extends CarFactory {
  public createProduct(turbo?: boolean): EveryCar {
    return new MustangCar(turbo);
  }
}
