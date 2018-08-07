import { FactoryMethodModule } from './factory-method.module';

describe('FactoryMethodModule', () => {
  let factoryMethodModule: FactoryMethodModule;

  beforeEach(() => {
    factoryMethodModule = new FactoryMethodModule();
  });

  it('should create an instance', () => {
    expect(factoryMethodModule).toBeTruthy();
  });
});
