export function templateMethod() {
  const a = new GasAnalyzer();
  // a.row();
  const b = new WaterAnalyzer();
  // b.row();
}

abstract class Analizator {
  protected abstract step1(): void;

  protected abstract step2(): void;

  public analyzer(): void {
    this.step1();
    this.step2();
  }
}

class GasAnalyzer extends Analizator {
  protected step1(): void {
    console.log('Gas first analyzing stage');
  }

  protected step2(): void {
    console.log('Gas second analyzing stage');
  }
}
class WaterAnalyzer extends Analizator {
  protected step1(): void {
    console.log('Water first analyzing stage');
  }

  protected step2(): void {
    console.log('Water second analyzing stage');
  }
}
