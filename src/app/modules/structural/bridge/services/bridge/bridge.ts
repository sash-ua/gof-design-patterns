// The abstraction
abstract class Car {

  protected constructor(public car: Vehicle) {
  }

  public abstract name();

  public abstract start();

  public abstract speedUp(sp: number);

  public abstract currSpeed();
}

// The refined abstraction
export class OneOfFordCar extends Car {
  // Refined abstraction get implementer.
  public constructor(public car: Vehicle) {
    super(car);
  }

  name() {
    return this.car.name;
  }

  start() {
    this.car.start();
  }

  speedUp(sp: number) {
    this.car.speedUp(sp);
  }

  currSpeed() {
    return this.car.currSpeed();
  }
}

// The implementer's abstraction
export interface Vehicle {
  name: string;
  speed: number;
  speedLimit: number;

  start();

  speedUp(speed: number): void;

  currSpeed(): number;
}

abstract class FordCar implements Vehicle {
  name: string;
  speed: number;
  speedLimit: number;

  public start() {
    if (this.speed === 0) {
      this.speed = 1;
    }
  }

  public speedUp(speed: number): void {
    this.speed = speed <= this.speedLimit ? speed : this.speedLimit;
  }

  public currSpeed(): number {
    return this.speed;
  }
}

// Concrete implementer
export class FordFiesta extends FordCar {
  name = 'Fiesta';
  speed = 0;
  speedLimit = 220;

  constructor() {
    super();
  }
}

// Concrete implementer
export class FordMustang extends FordCar {
  name = 'Mustang';
  speed = 0;
  speedLimit = 280;

  constructor() {
    super();
  }
}
