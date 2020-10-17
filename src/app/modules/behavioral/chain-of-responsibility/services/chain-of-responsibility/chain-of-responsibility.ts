export function chainOfResponsibility() {
  const appHandler = new AppHandler();
  const dialogHandler = new DialogHandler();
  const buttonHandler = new ButtonHandler();
  buttonHandler.successor = appHandler;    // Chain: button -> app
  dialogHandler.successor = buttonHandler; // Chain: dialog -> button -> app
  dialogHandler.handleHelp({name: 'dialog'});  // This is help dialog!
  dialogHandler.handleHelp({name: 'button'});  // This is help button!
  dialogHandler.handleHelp({name: 'q'});       // This is help app!
}

export interface HelpEvent {
  name: string;
}

export interface HelpHandler {
  successor: HelpHandler;

  handleHelp(control: any);
}

abstract class Handler implements HelpHandler {
  protected _successor: HelpHandler;

  abstract handleHelp(control: HelpEvent);

  get successor(): HelpHandler {
    return this._successor;
  }

  set successor(obj: HelpHandler) {
    this._successor = obj;
  }
}

export class AppHandler extends Handler {
  protected _successor: HelpHandler;

  handleHelp(control: HelpEvent) {
    console.log('This is help app!');
  }
}

export class DialogHandler extends Handler {
  protected _successor: HelpHandler;

  handleHelp(control: HelpEvent) {
    if (control.name === 'dialog') {
      console.log('This is help dialog!');
    } else if (this.successor) {
      this.successor.handleHelp(control);
    }
  }
}

export class ButtonHandler extends Handler {
  protected _successor: HelpHandler;

  handleHelp(control: HelpEvent) {
    if (control.name === 'button') {
      console.log('This is help button!');
    } else if (this.successor) {
      this.successor.handleHelp(control);
    }
  }
}
