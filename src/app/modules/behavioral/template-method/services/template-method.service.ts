import {Injectable} from '@angular/core';
import {GasAnalyzer, WaterAnalyzer} from './template-method/template-method';

@Injectable({
  providedIn: 'root'
})
export class TemplateMethodService {

  constructor() {
  }

  templateMethod() {
    const a = new GasAnalyzer();
    // a.analyzer();
    const b = new WaterAnalyzer();
    // b.analyzer();
  }

}
