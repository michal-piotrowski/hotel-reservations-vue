import Axios from 'axios';

/** source: https://rapidapi.com/apidojo/api/hotels4
 * import axios from "axios";

 * const options = {
 *   method: 'GET',
 *   url: 'https://hotels4.p.rapidapi.com/locations/search',
 *   params: {query: 'new york', locale: 'en_US'},
 *   headers: {
 *     'x-rapidapi-key': '0788f27926mshf2ab0f03f3b4d65p1f371cjsn376269b5e8bc',
 *     'x-rapidapi-host': 'hotels4.p.rapidapi.com'
 *   }
 * };
 * 
 * axios.request(options).then(function (response) {
 * 	console.log(response.data);
 * }).catch(function (error) {
 * 	console.error(error);
 * });
 */

//  const options = {
//    method: 'GET',
//    url: 'https://hotels4.p.rapidapi.com/locations/search',
//    params: {query: 'new york', locale: 'en_US'},
//    headers: {
//      'x-rapidapi-key': '0788f27926mshf2ab0f03f3b4d65p1f371cjsn376269b5e8bc',
//      'x-rapidapi-host': 'hotels4.p.rapidapi.com'
//    }
//  };

Axios.interceptors.request.use(config => {
  if (config.url && config.url.includes('rapidapi')) {
    config.headers = {
      'x-rapidapi-key': '0788f27926mshf2ab0f03f3b4d65p1f371cjsn376269b5e8bc',
      'x-rapidapi-host': 'hotels4.p.rapidapi.com'
    };
  }
  return config;
})

/**
 * Mocking:
 * e.g. location suggested by nominatim after "Zürich HB" : Zürich Hauptbahnhof, Passage Löwenstrasse, City, Altstadt, Zurich, District Zurich, Zurich, 8090, Switzerland
 * 
 * locations/search?q=Zürich Hauptbahnhof, Passage Löwenstrasse, City, Altstadt, Zurich, District Zurich, Zurich, 8090, Switzerland
 */
export default {

  httpGet(url) {
    if (url.includes(URL.rapSearchDestinations)) {
      return locations_search_zurich_hb
    }
    return Axios.get(url);
  },

  httpPost(url, data) {
    return Axios.post(url, data, this.config);
  }
}

export const URL = {
  nomLocationsSuggestions: 'https://nominatim.openstreetmap.org/', // https://nominatim.openstreetmap.org/search?q=Zürich&format=json
  rapSearchDestinations: 'https://hotels4.p.rapidapi.com/locations/search' // https://hotels4.p.rapidapi.com/locations/search?query=Zürich Hauptbahnhof, Passage Löwenstrasse, City, Altstadt, Zurich, District Zurich, Zurich, 8090, Switzerland&locale=en_US  
}


const locations_search_zurich_hb = {
  response: {
    data: {
      "term": "Zürich Hauptbahnhof",
      "moresuggestions": 0,
      "autoSuggestInstance": null,
      "trackingID": "609ac1f3bcca755cf2614f0963efc076",
      "misspellingfallback": false,
      "suggestions": [
        {
          "group": "CITY_GROUP",
          "entities": []
        },
        {
          "group": "HOTEL_GROUP",
          "entities": [
            {
              "geoId": "25277",
              "destinationId": "288919",
              "landmarkCityDestinationId": null,
              "type": "HOTEL",
              "redirectPage": "DEFAULT_PAGE",
              "latitude": 47.378754,
              "longitude": 8.543519,
              "searchDetail": null,
              "caption": "Arlette Am <span class='highlighted'>Hauptbahnhof</span> Hotel, <span class='highlighted'>Zürich</span>, Canton of Zurich, Switzerland",
              "name": "Arlette Am Hauptbahnhof Hotel"
            }
          ]
        },
        {
          "group": "LANDMARK_GROUP",
          "entities": []
        },
        {
          "group": "TRANSPORT_GROUP",
          "entities": [
            {
              "geoId": "6021282",
              "destinationId": "1710881",
              "landmarkCityDestinationId": null,
              "type": "TRAIN_STATION",
              "redirectPage": "DEFAULT_PAGE",
              "latitude": 47.377839,
              "longitude": 8.540271,
              "searchDetail": null,
              "caption": "<span class='highlighted'>Zürich</span> <span class='highlighted'>Hauptbahnhof</span>, Zürich, Canton of Zurich, Switzerland",
              "name": "Zürich Hauptbahnhof"
            }
          ]
        }
      ],
      "geocodeFallback": false
    }
  }
};