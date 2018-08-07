import { MementoModule } from './memento.module';

describe('MementoModule', () => {
  let mementoModule: MementoModule;

  beforeEach(() => {
    mementoModule = new MementoModule();
  });

  it('should create an instance', () => {
    expect(mementoModule).toBeTruthy();
  });
});
