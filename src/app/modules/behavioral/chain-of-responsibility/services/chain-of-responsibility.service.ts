import {Injectable} from '@angular/core';
import {AppHandler, ButtonHandler, DialogHandler, HelpHandler} from './chain-of-responsibility/chain-of-responsibility';

@Injectable({
  providedIn: 'root'
})
export class ChainOfResponsibilityService {
  dialogHandler: HelpHandler;
  buttonHandler: HelpHandler;
  appHandler: HelpHandler;

  constructor() {
  }

  chainOfResponsibility() {
    this.appHandler = new AppHandler();
    this.dialogHandler = new DialogHandler();
    this.buttonHandler = new ButtonHandler();
    this.buttonHandler.setSuccessor(this.appHandler);    // Chain: button -> app
    this.dialogHandler.setSuccessor(this.buttonHandler); // Chain: dialog -> button -> app
    // this.dialogHandler.handleHelp({name: 'dialog'});  // This is help dialog!
    // this.dialogHandler.handleHelp({name: 'button'});  // This is help button!
    // this.dialogHandler.handleHelp({name: 'q'});       // This is help app!
  }
}
