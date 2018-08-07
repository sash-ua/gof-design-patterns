import { MediatorModule } from './mediator.module';

describe('MediatorModule', () => {
  let mediatorModule: MediatorModule;

  beforeEach(() => {
    mediatorModule = new MediatorModule();
  });

  it('should create an instance', () => {
    expect(mediatorModule).toBeTruthy();
  });
});
