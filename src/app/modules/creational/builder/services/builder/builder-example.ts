export type House = Array<string>;

export interface Building {
  concreteHouse: House;

  construct(parts: string): void;

  showHouse(): void;
}

class BuildHouse implements Building {
  concreteHouse: House = [];

  construct(part: string): void {
    this.concreteHouse.push(part);
  }

  showHouse(): House {
    return this.concreteHouse;
  }
}

export interface Builder {
  house: BuildHouse;

  buildBaseFloor();

  buildFloors();

  buildRoof();

  getHouse(): BuildHouse;
}

export class ConstructionBuilder implements Builder {
  public house: BuildHouse;

  constructor() {
    this.house = new BuildHouse();
  }

  buildBaseFloor() {
    this.house.construct('base floor ready');
  }

  buildFloors() {
    this.house.construct('all floors ready');
  }

  buildRoof() {
    this.house.construct('roof ready');
  }

  getHouse(): BuildHouse {
    return this.house;
  }
}

export interface Director {
  builder: Builder;

  construct(): void;
}

export class ConstructionDirector implements Director {
  public builder: Builder;

  constructor(public currentBuilder: Builder) {
    this.builder = currentBuilder;
  }

  construct(): void {
    this.builder.buildBaseFloor();
    this.builder.buildFloors();
    this.builder.buildRoof();
  }
}

