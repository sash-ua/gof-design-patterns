import {Injectable} from '@angular/core';
import {Developer} from './decorator/decorator';

@Injectable({
  providedIn: 'root'
})
export class DecoratorService {

  constructor() {
  }

  decorator() {
    // console.log(new Developer({ position: 'front-end', name: 'Alex'}));
    // console.log(new Developer({ position: 'front-end', name: 'Alex'}).employeeInfo()); // 'Name: Alex, position: front-end, department: Front-end dep-t'
  }


}
