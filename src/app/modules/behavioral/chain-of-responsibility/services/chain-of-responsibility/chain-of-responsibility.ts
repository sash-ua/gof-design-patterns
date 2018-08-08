export type HelpEvent = { name: string };

export interface HelpHandler {
  handleHelp(control: any);

  setSuccessor(obj: HelpHandler): void;

  getSuccessor(): HelpHandler;
}

export abstract class Handler implements HelpHandler {
  protected successor: HelpHandler;

  abstract handleHelp(control: HelpEvent);

  getSuccessor(): HelpHandler {
    return this.successor;
  }

  setSuccessor(obj: HelpHandler) {
    this.successor = obj;
  }
}

export class AppHandler extends Handler {
  protected successor: HelpHandler;

  handleHelp(control: HelpEvent) {
      console.log('This is help app!');
  }
}
export class DialogHandler extends Handler {
  protected successor: HelpHandler;

  handleHelp(control: HelpEvent) {
    if (control.name === 'dialog') {
      console.log('This is help dialog!');
    } else if (this.successor) {
      this.successor.handleHelp(control);
    }
  }
}

export class ButtonHandler extends Handler {
  protected successor: HelpHandler;

  handleHelp(control: HelpEvent) {
    if (control.name === 'button') {
      console.log('This is help button!');
    } else if (this.successor) {
      this.successor.handleHelp(control);
    }
  }
}
