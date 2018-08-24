export function adapterClassLvl(): void {
  // console.log(new AdapterClassLvl().request({body: 'go'}));
}

interface Answer {
  body: string;
}

interface TargetInterface<T> {
  request(obj: T): Answer;
}

class Adaptee<T> {
  xRequest(obj: T): string {
    return JSON.stringify(obj);
  }
}

class AdapterClassLvl<T> extends Adaptee<T> implements TargetInterface<T> {
  constructor() {
    super();
  }

  request(obj: T): Answer {
    return JSON.parse(this.xRequest(obj));
  }
}
