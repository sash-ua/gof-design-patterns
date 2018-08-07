import { InterpreterModule } from './interpreter.module';

describe('InterpreterModule', () => {
  let interpreterModule: InterpreterModule;

  beforeEach(() => {
    interpreterModule = new InterpreterModule();
  });

  it('should create an instance', () => {
    expect(interpreterModule).toBeTruthy();
  });
});
