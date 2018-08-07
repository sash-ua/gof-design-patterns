import { DecoratorModule } from './decorator.module';

describe('DecoratorModule', () => {
  let decoratorModule: DecoratorModule;

  beforeEach(() => {
    decoratorModule = new DecoratorModule();
  });

  it('should create an instance', () => {
    expect(decoratorModule).toBeTruthy();
  });
});
