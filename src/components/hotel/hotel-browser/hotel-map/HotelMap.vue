<template>
<div class="component-wrapper">
  <div class="component-container container">
    <HotelSearch ref="hotel-search"></HotelSearch>
    <div id="leaflet-wrapper">
      <div id="leaflet-map"></div>
    </div>
    <HotelList ref="hotel-list"></HotelList>
  </div>
</div>
</template>

<script>
import Vue, { defineComponent } from 'vue';
import HotelList from '../hotel-list/HotelList.vue';
import HotelSearch from '../hotel-search/HotelSearch.vue';
import * as L from 'leaflet';
import {mapGetters} from 'vuex';
import {isEmpty} from 'lodash';
import {formFields} from '@/store/store.js';
import HrTool from '@/helpers/HrTool.js';

export default defineComponent({
  components: {
    HotelSearch,
    HotelList
  },
  data() {
    return {
      map: null,
      layerGroup: null,
      isEmpty,
      formFields,
      L,
      HrTool,
      // greenIcon = L.icon({
      //   iconUrl: 'leaf-green.png',
      //   shadowUrl: 'leaf-shadow.png',

      //   iconSize:     [38, 95], // size of the icon
      //   shadowSize:   [50, 64], // size of the shadow
      //   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      //   shadowAnchor: [4, 62],  // the same for the shadow
      //   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      // });
    }
  },
  mounted() {
    this.map = L.map('leaflet-map');
    this.layerGroup = L.layerGroup().addTo(this.map);
    if (isEmpty(this.get_location_form_data) && isEmpty(this.get_location_form_data[formFields.SUGGESTION])) {
      this.map.setView([51.505, -0.09], 13);
    } else {
      this.map.setView(this.get_location_form_data[formFields.SUGGESTION].lat, this.get_location_form_data[formFields.SUGGESTION].lon, 13);
    }
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  },
  created() {
        //start spinning the spinner IF THE STORE IS COMMITTING THE FETCH_SUGGESTIONS mutation
  },
  methods: {
    addMarker(lat, lon) {
      L.marker([lat, lon], {icon: HrTool.getDefaultMarker()}).addTo(this.layerGroup);
    }
  },
  computed: {
    ...mapGetters([
      'get_fetched_destinations',
      'get_location_form_data'
    ]),
    addMarkers() {
      for (let location of this.get_fetched_destinations) {
        this.addMarker(location.latitude, location.longitude);
      }
    },

  },
  watch: {
    '$store.state.locationFormData': {
      deep: true,
      handler(newVal) {
        if (newVal != null && newVal[formFields.SUGGESTION] != null) {
          this.map.setView([newVal[formFields.SUGGESTION].lat, newVal[formFields.SUGGESTION].lon], 13);
        }
      }
    },
    '$store.state.fetchedDestinations': {
      deep: true,
      handler(newLocations) {
        for (let place of newLocations) {
          this.addMarker(place.latitude, place.longitude)
        }
      }
    }
  }
})
</script>

<style scoped>
@import '/styles.scss'; 

#leaflet-map {
  width:100%;
  height:60vh;
  margin-bottom: 3em;
  box-shadow: $hr-box-shadow;
}

#leaflet-wrapper {
  padding:1em 3em;
  
}

#search-input {
  border-radius: 7px;
  border: 2.3px solid #4654CF;
}

#leaflet-results-list {
  margin-left:20px
}

@include media-breakpoint-down(sm) {
  #leaflet-map {
    height:60vh;
  } 
 }

</style>