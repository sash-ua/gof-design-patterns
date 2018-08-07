import { TemplateMethodModule } from './template-method.module';

describe('TemplateMethodModule', () => {
  let templateMethodModule: TemplateMethodModule;

  beforeEach(() => {
    templateMethodModule = new TemplateMethodModule();
  });

  it('should create an instance', () => {
    expect(templateMethodModule).toBeTruthy();
  });
});
