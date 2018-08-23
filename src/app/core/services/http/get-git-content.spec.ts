import { TestBed, inject } from '@angular/core/testing';

import { GetGitContentService } from './get-git-content.service';

describe('GetGitContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetGitContentService]
    });
  });

  it('should be created', inject([GetGitContentService], (service: GetGitContentService) => {
    expect(service).toBeTruthy();
  }));
});
