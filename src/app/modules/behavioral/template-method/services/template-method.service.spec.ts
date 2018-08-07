import { TestBed, inject } from '@angular/core/testing';

import { TemplateMethodService } from './template-method.service';

describe('TemplateMethodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateMethodService]
    });
  });

  it('should be created', inject([TemplateMethodService], (service: TemplateMethodService) => {
    expect(service).toBeTruthy();
  }));
});
