export class Facade {
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

  public operationAB() {
    console.log(`Do ${this.subSysA.operationA()} and ${this.subSysB.operationB()}`);
  }

  public operationCD() {
    console.log(`Do ${this.subSysC.operationC()} and ${this.subSysD.operationD()}`);
  }

  public operationAD() {
    console.log(`Do ${this.subSysA.operationA()} and ${this.subSysD.operationD()}`);
  }
}

class SubSystemA {
  operationA() {
    return 'operation A';

  }
}

class SubSystemB {
  operationB() {
    return 'operation B';

  }
}

class SubSystemC {
  operationC() {
    return 'operation C';
  }
}

class SubSystemD {
  operationD() {
    return 'operation D';
  }
}
