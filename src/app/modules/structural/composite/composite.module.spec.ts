import { CompositeModule } from './composite.module';

describe('CompositeModule', () => {
  let compositeModule: CompositeModule;

  beforeEach(() => {
    compositeModule = new CompositeModule();
  });

  it('should create an instance', () => {
    expect(compositeModule).toBeTruthy();
  });
});
