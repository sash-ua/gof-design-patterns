export type Answer = {body: string};

abstract class TargetInterface<T> {
  public abstract request(obj: T): Answer;
}

export class AdapterObjLvl<T> extends TargetInterface<T> {
  private adaptee = new RequestAPI();

  request(obj: T): Answer {
    return JSON.parse(this.adaptee.xRequest(obj));
  }
}

class RequestAPI<T> {
  xRequest(obj: T): string {
    return JSON.stringify(obj);
  }
}
