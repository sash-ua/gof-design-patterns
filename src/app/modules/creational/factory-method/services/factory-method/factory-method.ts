export interface EveryCar {
  name: string;
  speedLimit: number;

  start(): boolean;

  speedUp(speed: number): boolean;
}

export abstract class Car implements EveryCar {
  public name: string;
  public speedLimit: number;

  public start(): boolean {
    return true;
  }
  abstract speedUp(speed: number): boolean;
}

class FocusCar extends Car implements EveryCar {
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

export interface ProductFactory {
  createProduct(): EveryCar;
}

abstract class CarFactory implements ProductFactory {
  abstract createProduct(): EveryCar;
}

export class FocusFactory extends CarFactory implements ProductFactory {
  public createProduct(): EveryCar {
    return new FocusCar();
  }
}

export class MustangFactory extends CarFactory implements ProductFactory {
  public createProduct(turbo?: boolean): EveryCar {
    return new MustangCar(turbo);
  }
}
