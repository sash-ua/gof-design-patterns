import {PATTERN_CONFIG_MOCK} from './pattern-config.mock';

export const DataInjectorServiceStub = {
  patternCompDataStub: PATTERN_CONFIG_MOCK,
  getContent() {
    return this.patternCompDataStub;
  }
};
