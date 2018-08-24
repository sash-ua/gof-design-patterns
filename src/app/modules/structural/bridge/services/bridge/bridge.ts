export function bridge() {
  // const fiesta = new OneOfFordCar(new FordFiesta());
  // console.log(fiesta.name());
  // console.log(fiesta.currSpeed());
  // fiesta.start();
  // console.log(fiesta.currSpeed());
  // fiesta.speedUp(200);
  // console.log(fiesta.currSpeed());
  // fiesta.speedUp(250);
  // console.log(fiesta.currSpeed());
  // const mustang = new OneOfFordCar(new FordMustang());
  // console.log(mustang.name());
  // console.log(mustang.currSpeed());
  // mustang.start();
  // console.log(mustang.currSpeed());
  // mustang.speedUp(200);
  // console.log(mustang.currSpeed());
  // mustang.speedUp(270);
  // console.log(mustang.currSpeed());
}

abstract class Car {
  protected constructor(public car: Vehicle) {
  }

  public abstract name(): string;

  public abstract start(): void;

  public abstract speedUp(sp: number): void;

  public abstract currSpeed(): number;
}

class OneOfFordCar extends Car {
  public constructor(public car: Vehicle) {
    super(car);
  }

  public name(): string {
    return this.car.name;
  }

  public start(): void {
    this.car.start();
  }

  public speedUp(sp: number): void {
    this.car.speedUp(sp);
  }

  public currSpeed(): number {
    return this.car.currSpeed();
  }
}

interface Vehicle {
  name: string;

  start(): void;

  speedUp(speed: number): void;

  currSpeed(): number;
}

abstract class FordCar implements Vehicle {
  public name: string;
  protected speed: number;
  protected speedLimit: number;

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

class FordFiesta extends FordCar {
  public name = 'Fiesta';
  protected speed = 0;
  protected speedLimit = 220;

  constructor() {
    super();
  }
}

class FordMustang extends FordCar {
  public name = 'Mustang';
  protected speed = 0;
  protected speedLimit = 280;

  constructor() {
    super();
  }
}
