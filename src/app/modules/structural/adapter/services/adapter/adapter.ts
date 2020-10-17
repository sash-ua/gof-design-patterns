export namespace AdapterObjectLvl {
  export function adpterObjLvl(): void {
    console.log(new Adapter().request({body: 'go'}));
  }

  export interface Answer {
    body: string;
  }

  abstract class TargetInterface<T> {
    public abstract request(obj: T): Answer;
  }

  class Adapter<T> extends TargetInterface<T> {
    private adaptee = new RequestAPI();

    request(obj: T): AdapterObjectLvl.Answer {
      return JSON.parse(this.adaptee.xRequest(obj));
    }

  }

  class RequestAPI<T> {
    xRequest(obj: T): string {
      return JSON.stringify(obj);
    }
  }
}

export namespace AdapterClassLvl {
  export function adapterClassLvl(): void {
    console.log(new Adapter().request({body: 'go'}));
  }

  export interface Answer {
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

  class Adapter<T> extends Adaptee<T> implements TargetInterface<T> {
    constructor() {
      super();
    }

    request(obj: T): AdapterClassLvl.Answer {
      return JSON.parse(this.xRequest(obj));
    }
  }
}
