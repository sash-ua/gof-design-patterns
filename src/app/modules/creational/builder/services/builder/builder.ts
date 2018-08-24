export function buildHouse() {
  const builder = new ConstructionBuilder();
  const director = new ConstructionDirector(builder);
  director.construct();
  const house = builder.house;
  // console.log('Builder: ', house.showHouse());
}

type House = Array<string>;

interface Building {
  construct(parts: string): void;

  showHouse(): void;
}

class BuildHouse implements Building {
  private concreteHouse: House = [];

  construct(part: string): void {
    this.concreteHouse.push(part);
  }

  showHouse(): House {
    return this.concreteHouse;
  }
}

abstract class Builder {
  public house: BuildHouse;

  public abstract buildBaseFloor();

  public abstract buildFloors();

  public abstract buildRoof();
}

class ConstructionBuilder extends Builder {
  private _house: BuildHouse;

  constructor() {
    super();
    this._house = new BuildHouse();
  }

  public buildBaseFloor() {
    this._house.construct('base floor ready');
  }

  public buildFloors() {
    this._house.construct('all floors ready');
  }

  public buildRoof() {
    this._house.construct('roof ready');
  }

  public get house(): BuildHouse {
    return this._house;
  }
}

interface Director {
  construct(): void;
}

class ConstructionDirector implements Director {
  private builder: Builder;

  constructor(public currentBuilder: Builder) {
    this.builder = currentBuilder;
  }

  construct(): void {
    this.builder.buildBaseFloor();
    this.builder.buildFloors();
    this.builder.buildRoof();
  }
}

