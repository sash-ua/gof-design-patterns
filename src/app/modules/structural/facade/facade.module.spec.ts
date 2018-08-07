import { FacadeModule } from './facade.module';

describe('FacadeModule', () => {
  let facadeModule: FacadeModule;

  beforeEach(() => {
    facadeModule = new FacadeModule();
  });

  it('should create an instance', () => {
    expect(facadeModule).toBeTruthy();
  });
});
