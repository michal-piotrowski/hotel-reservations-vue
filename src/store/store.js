
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
    SET_SELECTED_HOTEL_INDEX: 'setSelectedHotelIndex',
  },
  actions: {
    FETCH_SUGGESTIONS: 'fetchSuggestions',
    SEARCH_DESTINATIONS: 'searchDestinations',
    MERGE_LOCATION_FORM_VALUE: 'mergeLocationFormValue'
  }
}

export const formFields = {
  SUGGESTION: 'suggestion',
  DATE_FROM: 'dateFrom',
  DATE_TO: 'dateTo'
}

// Exported solely for the benefit of testing this object. e.g. whether names in names const correspond to actual action names and mutation names.
export const storeOptions = {
  state() {
    return {
      suggestions: [],
      fetchedDestinations: [],
      locationFormData: {}, //{location: , dateFrom: , dateTo: }
      currently_selected_hotel_index: {},
    };
  },
  getters: {
    get_suggestions: state => {
      return state.suggestions
    },
    get_fetched_destinations: state => {
      return state.fetchedDestinations
    },
    get_fetched_destination: state => arrayIndex => { return state.fetchedDestinations[arrayIndex] },
    get_location_form_data: state => { return state.locationFormData },
    get_currently_selected_hotel_index: state => {
      return state.currently_selected_hotel_index;
    }
  },

  actions: {
    fetchSuggestions({ commit, state }, searchString) {
      return HrAxios.httpGet(URL.nomLocationsSuggestions + 'search?q=' + searchString + '&format=json')
      .then(response => {
        if (response.data.length == 0) {
          commit(names.mutations.PUT_SUGGESTIONS,  [{ id: -1, display_name: 'No results found' }]);
        } else {
          commit(names.mutations.PUT_SUGGESTIONS,  response.data.map(el => { return { id: el.place_id, display_name: el.display_name, lat: el.lat, lon: el.lon } }));
        }
      })
      
    },
    mergeLocationFormValue({ commit, state }, { value, fieldName }) {
      commit(names.mutations.PUT_LOCATION_FORM_DATA, { value: value, fieldName: fieldName });
    },
    searchDestinations({ commit, state }) {
      const parsedSuggestion = parseSuggestion(state.locationFormData[formFields.SUGGESTION].display_name);
      commit(names.mutations.SEARCH_DESTINATIONS, parsedSuggestion);
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
      return HrAxios.httpGet(URL.rapSearchDestinations + '?query=' + parsedSuggestion)
        .then(response => {
          if (response.data.suggestions[1].entities.length == 0) {
            state.fetchedDestinations = [{ id: -1, caption: 'No results found' }]
          } else {
            state.fetchedDestinations = response.data.suggestions[1].entities;
          }
        });
    },
    fetchSuggestions(state, searchString) {

    },
    setSelectedHotelIndex(state, index) {
      state.currently_selected_hotel_index = index
    }
  },
}

function parseSuggestion(nominatimLocation) {
    if (nominatimLocation.includes(',') && nominatimLocation.split(',').length > 1) {
      const suggestionParts = nominatimLocation.split(',');
      return suggestionParts[0] + ' ' + suggestionParts[suggestionParts.length-1];
    } else {
      return nominatimLocation
    }
}
  
export const store = new Vuex.Store(storeOptions);




