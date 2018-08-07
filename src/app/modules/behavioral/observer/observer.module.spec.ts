import { ObserverModule } from './observer.module';

describe('ObserverModule', () => {
  let observerModule: ObserverModule;

  beforeEach(() => {
    observerModule = new ObserverModule();
  });

  it('should create an instance', () => {
    expect(observerModule).toBeTruthy();
  });
});
