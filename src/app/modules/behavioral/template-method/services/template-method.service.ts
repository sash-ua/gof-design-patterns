import {Injectable} from '@angular/core';
import {templateMethod} from './template-method/template-method';

@Injectable({
  providedIn: 'root'
})
export class TemplateMethodService {
  templateMethod() {
    templateMethod();
  }
}
