import { FlyweightModule } from './flyweight.module';

describe('FlyweightModule', () => {
  let flyweightModule: FlyweightModule;

  beforeEach(() => {
    flyweightModule = new FlyweightModule();
  });

  it('should create an instance', () => {
    expect(flyweightModule).toBeTruthy();
  });
});
