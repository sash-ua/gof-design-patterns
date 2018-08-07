import { BridgeModule } from './bridge.module';

describe('BridgeModule', () => {
  let bridgeModule: BridgeModule;

  beforeEach(() => {
    bridgeModule = new BridgeModule();
  });

  it('should create an instance', () => {
    expect(bridgeModule).toBeTruthy();
  });
});
