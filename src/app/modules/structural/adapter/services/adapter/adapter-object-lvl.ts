export function adpterObjLvl(): void {
  // console.log(new AdapterObjLvl().request({body: 'go'}));
}

export interface Answer {
  body: string;
}

abstract class TargetInterface<T> {
  public abstract request(obj: T): Answer;
}

class AdapterObjLvl<T> extends TargetInterface<T> {
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
