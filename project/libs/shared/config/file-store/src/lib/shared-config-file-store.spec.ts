import { sharedConfigFileStore } from './shared-config-file-store';

describe('sharedConfigFileStore', () => {
  it('should work', () => {
    expect(sharedConfigFileStore()).toEqual('shared-config-file-store');
  });
});
