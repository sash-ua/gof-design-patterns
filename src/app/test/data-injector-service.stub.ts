import {PATTERN_CONFIG_STUB} from './pattern-config.stub';

export const DATA_INJECTOR_SERVICE_STUB = {
  patternCompDataStub: PATTERN_CONFIG_STUB,
  getContent() {
    return this.patternCompDataStub;
  }
};
