interface Subject {
  request(url: string): void;
}

export class RealSubject implements Subject {
  public request(url: string) {
    console.log('RealSubject');
  }
}

export class Proxy implements Subject {
  constructor(private rs: RealSubject) {
  }

  public request(url: string): void {
    this.rs.request(url);
  }
}
