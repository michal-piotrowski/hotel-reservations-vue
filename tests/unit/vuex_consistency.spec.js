import { shallowMount } from '@vue/test-utils'
import { names as storeNames, storeOptions } from '@/store/store.js';

describe('Store', () => {
  it('has consistent contents of store and exposed string names', () => {
    for (let vuexMutation of storeOptions.mutations) {
      if (!vuexMutation in (storeNames.mutations)) {
        throw new Error('mutation name from vuex store object not found in names object');
      }
    }
    debugger;
    for (let vuexAction of storeOptions.actions) {
      if (!vuexAction in (storeNames.actions)) {
        throw new Error('action name from vuex store object not found in names object');
      }
    }
  })
})
