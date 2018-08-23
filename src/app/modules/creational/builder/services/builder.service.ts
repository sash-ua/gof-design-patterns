import {Injectable} from '@angular/core';
import {Builder, Director, Building, ConstructionBuilder, ConstructionDirector} from './builder/builder';


@Injectable({
  providedIn: 'root'
})
export class BuilderService {
  private builder: Builder;
  private director: Director;
  private house: Building;


  constructor() {
  }

  buildHouse() {
    this.builder = new ConstructionBuilder();
    this.director = new ConstructionDirector(this.builder);
    this.director.construct();
    this.house = this.builder.getHouse();
    // console.log('Builder: ', this.house.showHouse());
  }
}
