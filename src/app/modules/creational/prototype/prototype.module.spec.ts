import { PrototypeModule } from './prototype.module';

describe('PrototypeModule', () => {
  let prototypeModule: PrototypeModule;

  beforeEach(() => {
    prototypeModule = new PrototypeModule();
  });

  it('should create an instance', () => {
    expect(prototypeModule).toBeTruthy();
  });
});
