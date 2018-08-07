import { ChainOfResponsibilityModule } from './chain-of-responsibility.module';

describe('ChainOfResponsibilityModule', () => {
  let chainOfResponsibilityModule: ChainOfResponsibilityModule;

  beforeEach(() => {
    chainOfResponsibilityModule = new ChainOfResponsibilityModule();
  });

  it('should create an instance', () => {
    expect(chainOfResponsibilityModule).toBeTruthy();
  });
});
