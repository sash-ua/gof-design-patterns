import { AdapterModule } from './adapter.module';

describe('AdapterModule', () => {
  let adapterModule: AdapterModule;

  beforeEach(() => {
    adapterModule = new AdapterModule();
  });

  it('should create an instance', () => {
    expect(adapterModule).toBeTruthy();
  });
});
