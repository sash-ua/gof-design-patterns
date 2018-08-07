import { SingletonModule } from './singleton.module';

describe('SingletonModule', () => {
  let singletonModule: SingletonModule;

  beforeEach(() => {
    singletonModule = new SingletonModule();
  });

  it('should create an instance', () => {
    expect(singletonModule).toBeTruthy();
  });
});
