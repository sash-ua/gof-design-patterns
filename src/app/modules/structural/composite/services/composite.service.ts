import {Injectable} from '@angular/core';
import {ComplexEl, PrimitiveEl} from './composite/composite';

@Injectable({
  providedIn: 'root'
})
export class CompositeService {

  constructor() {
  }

  composite() {
    const picture = new ComplexEl('Root');
    const line = new PrimitiveEl('line');
    const circle = new PrimitiveEl('circle');
    const pip = new ComplexEl('canvas1');
    const lineInPip = new PrimitiveEl('line');
    const outPictureEl = new PrimitiveEl('out');
    pip.addElement(lineInPip);
    picture.addElement(line);
    picture.addElement(circle);
    picture.addElement(pip);
    // console.log(picture.getChild(line));
    // console.log(picture.getChildren());
    // console.log(picture.getChild(outPictureEl));
  }
}
