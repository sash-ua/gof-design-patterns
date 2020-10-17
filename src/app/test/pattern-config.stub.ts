import {of} from 'rxjs';

export  const PATTERN_CONFIG_STUB = {
  gitLink: '',
  wikiLink: '',
  sampleLink: '',
  linkName: 'Test name',
  sample: 'Test title',
  content$: of('<h1>test content</h1>')
};
