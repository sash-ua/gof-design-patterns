import { IteratorModule } from './iterator.module';

describe('IteratorModule', () => {
  let iteratorModule: IteratorModule;

  beforeEach(() => {
    iteratorModule = new IteratorModule();
  });

  it('should create an instance', () => {
    expect(iteratorModule).toBeTruthy();
  });
});
