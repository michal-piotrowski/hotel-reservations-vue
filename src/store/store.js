
import Vuex, { Store } from 'vuex';
import HrAxios, { URL } from '../http/HrAxios.js';
import { names as routerNames } from '@/router';

export const names = {
  mutations: {
    PUT_SUGGESTIONS: 'putSuggestions',
    PUT_LOCATION_FORM_DATA: 'putLocationFormData',
    SET_SELECTED_SUGGESTION: 'setSelectedSuggestion',
    SEARCH_DESTINATIONS: 'searchDestinations',
    FETCH_SUGGESTIONS: 'fetchSuggestions',
  },
  actions: {
    FETCH_SUGGESTIONS: 'fetchSuggestions',
    SEARCH_DESTINATIONS: 'searchDestinations',
    MERGE_LOCATION_FORM_VALUE: 'mergeLocationFormValue'
  }
}
 
export const store = new Vuex.Store({
  state() {
    return {
      suggestions: [],
      fetchedDestinations: [],
      locationFormData: {}, //{location: , dateFrom: , dateTo: }
    };
  },
  getters: {
    get_suggestions: state => { return state.suggestions },
    get_fetched_destinations: state => { return state.fetchedDestinations},
    get_location_form_data: state => { return state.locationFormData },
    is_committing: state => {
      console.log(this);
      return this._vm.committing;
    }
  },

  actions: {
    fetchSuggestions({ commit, state }, searchString) {
      return commit(names.mutations.FETCH_SUGGESTIONS, searchString);
    },
    mergeLocationFormValue({ commit, state }, { value, fieldName }) {
      commit(names.mutations.PUT_LOCATION_FORM_DATA, { value: value, fieldName: fieldName });
    },
    searchDestinations({ commit, state }) {
      const parsedSuggestion = this.parseSuggestion(state.locationFormData.location);
      commit(names.mutation.SEARCH_DESTINATIONS, parsedSuggestion);
    }
  },

  mutations: {
    putSuggestions(state, suggestions) {
      state.suggestions = suggestions
    },
    putLocationFormData(state, { value, fieldName }) {
      state.locationFormData[fieldName] = value
    },
    searchDestinations(state, parsedSuggestion) {
      return HrAxios.httpGet(URL.rapSearchDestinations + 'query=' + parsedSuggestion)
        .then(response => {
          if (response.data.length == 0) {
            commit(names.mutations.PUT_SUGGESTIONS, [{ id: -1, display_name: 'No results found' }]);
          } else {
            commit(names.mutations.PUT_SUGGESTIONS, response.data.map(el => { return { id: el.place_id, display_name: el.display_name, lat: el.lat, lon: el.lon } }));
          }
        })
    },
    fetchSuggestions(state, searchString) {
      return HrAxios.httpGet(URL.nomLocationsSuggestions + 'search?q=' + searchString + '&format=json')
        .then(response => {
          if (response.data.length == 0) {
            commit(names.mutations.PUT_SUGGESTIONS, [{ id: -1, display_name: 'No results found' }]);
          } else {
            commit(names.mutations.PUT_SUGGESTIONS, response.data.map(el => { return { id: el.place_id, display_name: el.display_name, lat: el.lat, lon: el.lon } }));
          }
        })
    }
  },

  parseSuggestion(nominatimLocation) {
    if (nominatimLocation.includes(',') && nominatimLocation.split(',').length > 1) {
      const suggestionParts = nominatimLocation.split(',');
      return suggestionParts[0] + ' ' + suggestionParts[suggestionParts.length-1];
    } else {
      return nominatimLocation
    }
  }
});




