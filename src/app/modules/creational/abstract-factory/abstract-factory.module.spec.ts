import { AbstractFactoryModule } from './abstract-factory.module';

describe('AbstractFactoryModule', () => {
  let abstractFactoryModule: AbstractFactoryModule;

  beforeEach(() => {
    abstractFactoryModule = new AbstractFactoryModule();
  });

  it('should create an instance', () => {
    expect(abstractFactoryModule).toBeTruthy();
  });
});
