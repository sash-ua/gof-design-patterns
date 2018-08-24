export function facade() {
  const f = new Facade();
  // f.operationAB();
  // f.operationAD();
  // f.operationCD();
}

class Facade {
  private subSysA: SubSystemA;
  private subSysB: SubSystemB;
  private subSysC: SubSystemC;
  private subSysD: SubSystemD;

  constructor() {
    this.subSysA = new SubSystemA();
    this.subSysB = new SubSystemB();
    this.subSysC = new SubSystemC();
    this.subSysD = new SubSystemD();
  }

  public operationAB(): void {
    console.log(`Do ${this.subSysA.operationA()} and ${this.subSysB.operationB()}`);
  }

  public operationCD(): void {
    console.log(`Do ${this.subSysC.operationC()} and ${this.subSysD.operationD()}`);
  }

  public operationAD(): void {
    console.log(`Do ${this.subSysA.operationA()} and ${this.subSysD.operationD()}`);
  }
}

class SubSystemA {
  public operationA(): string {
    return 'operation A';
  }
}

class SubSystemB {
  public operationB(): string {
    return 'operation B';
  }
}

class SubSystemC {
  public operationC(): string {
    return 'operation C';
  }
}

class SubSystemD {
  public operationD(): string {
    return 'operation D';
  }
}
