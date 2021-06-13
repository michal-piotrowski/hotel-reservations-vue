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
    // if (url.includes(URL.rapSearchDestinations)) {
    //   return new Promise((resolve) => {
    //     resolve(locations_search_rouen);
    //   });
    // }
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

const locations_search_rouen = {
  data: {
    "term": "Rouen France",
    "moresuggestions": 25,
    "autoSuggestInstance": null,
    "trackingID": "60a041344dec7ff2843bffaa58c3ba3d",
    "misspellingfallback": false,
    "suggestions": [
      {
        "group": "CITY_GROUP",
        "entities": [
          {
            "geoId": "553248633938960867",
            "destinationId": "10818963",
            "landmarkCityDestinationId": null,
            "type": "NEIGHBORHOOD",
            "redirectPage": "DEFAULT_PAGE",
            "latitude": 49.44163563421509,
            "longitude": 1.0988889134416813,
            "searchDetail": null,
            "caption": "<span class='highlighted'>Rouen</span> City Centre, Rouen, Seine-Maritime, <span class='highlighted'>France</span>",
            "name": "Rouen City Centre"
          },
          {
            "geoId": "553248635212951724",
            "destinationId": "11117311",
            "landmarkCityDestinationId": null,
            "type": "NEIGHBORHOOD",
            "redirectPage": "DEFAULT_PAGE",
            "latitude": 49.44261180530925,
            "longitude": 1.0921219403781595,
            "searchDetail": null,
            "caption": "Quartier Vieux Marché-Cathédrale, <span class='highlighted'>Rouen</span>, Seine-Maritime, <span class='highlighted'>France</span>",
            "name": "Quartier Vieux Marché-Cathédrale"
          },
          {
            "geoId": "6034491",
            "destinationId": "531391",
            "landmarkCityDestinationId": null,
            "type": "CITY",
            "redirectPage": "DEFAULT_PAGE",
            "latitude": 49.41058342416645,
            "longitude": 1.0955447550036455,
            "searchDetail": null,
            "caption": "Sotteville-les-<span class='highlighted'>Rouen</span>, Seine-Maritime, <span class='highlighted'>France</span>",
            "name": "Sotteville-les-Rouen"
          },
          {
            "geoId": "553248635212955206",
            "destinationId": "11117578",
            "landmarkCityDestinationId": null,
            "type": "NEIGHBORHOOD",
            "redirectPage": "DEFAULT_PAGE",
            "latitude": 49.43242840450134,
            "longitude": 1.088350974735464,
            "searchDetail": null,
            "caption": "Centre Ville Rive Gauche, <span class='highlighted'>Rouen</span>, Seine-Maritime, <span class='highlighted'>France</span>",
            "name": "Centre Ville Rive Gauche"
          }
        ]
      },
      {
        "group": "HOTEL_GROUP",
        "entities": [
          {
            "geoId": "51003875",
            "destinationId": "1633124000",
            "landmarkCityDestinationId": null,
            "type": "HOTEL",
            "redirectPage": "DEFAULT_PAGE",
            "latitude": 49.43778,
            "longitude": 1.09476,
            "searchDetail": null,
            "caption": "<span class='highlighted'>Rouen</span> Cathédrale, Rouen, Seine-Maritime, <span class='highlighted'>France</span>",
            "name": "Rouen Cathédrale"
          },
          {
            "geoId": "32787133",
            "destinationId": "1050188256",
            "landmarkCityDestinationId": null,
            "type": "HOTEL",
            "redirectPage": "DEFAULT_PAGE",
            "latitude": 49.429912,
            "longitude": 1.072604,
            "searchDetail": null,
            "caption": "Holiday Inn Express <span class='highlighted'>Rouen</span> Centre - Rive Gauche, an IHG Hotel, Rouen, Seine-Maritime, <span class='highlighted'>France</span>",
            "name": "Holiday Inn Express Rouen Centre - Rive Gauche, an IHG Hotel"
          },
          {
            "geoId": "23072606",
            "destinationId": "739323392",
            "landmarkCityDestinationId": null,
            "type": "HOTEL",
            "redirectPage": "DEFAULT_PAGE",
            "latitude": 49.42676,
            "longitude": 1.0621,
            "searchDetail": null,
            "caption": "Hôtel Armada, Le Petit-Quevilly, Seine-Maritime, <span class='highlighted'>France</span>",
            "name": "Hôtel Armada"
          },
          {
            "geoId": "6565737",
            "destinationId": "493258",
            "landmarkCityDestinationId": null,
            "type": "HOTEL",
            "redirectPage": "DEFAULT_PAGE",
            "latitude": 49.215563,
            "longitude": 1.16822,
            "searchDetail": null,
            "caption": "Hôtel de <span class='highlighted'>Rouen</span>, Louviers, Eure, <span class='highlighted'>France</span>",
            "name": "Hôtel de Rouen"
          }
        ]
      },
      {
        "group": "LANDMARK_GROUP",
        "entities": [
          {
            "geoId": "553248621533052469",
            "destinationId": "10655164",
            "landmarkCityDestinationId": "1634561",
            "type": "LANDMARK",
            "redirectPage": "DEFAULT_PAGE",
            "latitude": 49.43929,
            "longitude": 1.088933,
            "searchDetail": null,
            "caption": "<span class='highlighted'>Rouen</span> Opera House, Rouen, Seine-Maritime, <span class='highlighted'>France</span>",
            "name": "Rouen Opera House"
          },
          {
            "geoId": "6187693",
            "destinationId": "1731291",
            "landmarkCityDestinationId": "501770",
            "type": "LANDMARK",
            "redirectPage": "DEFAULT_PAGE",
            "latitude": 49.392531,
            "longitude": 1.058416,
            "searchDetail": null,
            "caption": "<span class='highlighted'>Rouen</span> Expo Park, Le Grand-Quevilly, Seine-Maritime, <span class='highlighted'>France</span>",
            "name": "Rouen Expo Park"
          },
          {
            "geoId": "6109464",
            "destinationId": "1678479",
            "landmarkCityDestinationId": "1634561",
            "type": "LANDMARK",
            "redirectPage": "DEFAULT_PAGE",
            "latitude": 49.440529,
            "longitude": 1.094059,
            "searchDetail": null,
            "caption": "<span class='highlighted'>Rouen</span> Cathedral, Rouen, Seine-Maritime, <span class='highlighted'>France</span>",
            "name": "Rouen Cathedral"
          },
          {
            "geoId": "553248621532504444",
            "destinationId": "10679291",
            "landmarkCityDestinationId": "1634561",
            "type": "LANDMARK",
            "redirectPage": "DEFAULT_PAGE",
            "latitude": 49.447387,
            "longitude": 1.098983,
            "searchDetail": null,
            "caption": "Musee des Antiquites, <span class='highlighted'>Rouen</span>, Seine-Maritime, <span class='highlighted'>France</span>",
            "name": "Musee des Antiquites"
          }
        ]
      },
      {
        "group": "TRANSPORT_GROUP",
        "entities": [
          {
            "geoId": "6330064",
            "destinationId": "1802478",
            "landmarkCityDestinationId": null,
            "type": "TRAIN_STATION",
            "redirectPage": "DEFAULT_PAGE",
            "latitude": 49.409393,
            "longitude": 1.083607,
            "searchDetail": null,
            "caption": "14-Julliet Tram Station, Sotteville-les-<span class='highlighted'>Rouen</span>, Seine-Maritime, <span class='highlighted'>France</span>",
            "name": "14-Julliet Tram Station"
          },
          {
            "geoId": "6032812",
            "destinationId": "1649198",
            "landmarkCityDestinationId": null,
            "type": "AIRPORT",
            "redirectPage": "DEFAULT_PAGE",
            "latitude": 49.38885,
            "longitude": 1.1875,
            "searchDetail": null,
            "caption": "<span class='highlighted'>Rouen</span>, <span class='highlighted'>France</span> (URO-Rouen - Seine Valley)",
            "name": "Rouen (URO-Rouen - Seine Valley)"
          },
          {
            "geoId": "6330017",
            "destinationId": "1802466",
            "landmarkCityDestinationId": null,
            "type": "TRAIN_STATION",
            "redirectPage": "DEFAULT_PAGE",
            "latitude": 49.435356,
            "longitude": 1.086655,
            "searchDetail": null,
            "caption": "Joffre-Mutualite Tram Station, <span class='highlighted'>Rouen</span>, Seine-Maritime, <span class='highlighted'>France</span>",
            "name": "Joffre-Mutualite Tram Station"
          }
        ]
      }
    ],
    "geocodeFallback": false
  }
};
const locations_search_zurich_hb = {
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
};