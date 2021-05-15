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

export default defineComponent({
  components: {
    HotelSearch,
    HotelList
  },
  data() {
    return {
      map: null,
    }
  },
  mounted() {

    //fill the searched line, date-from & date-to with the query from Slider.vue
    this.map = L.map('leaflet-map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    // mark the found points on the map
  },
  created() {
        //start spinning the spinner IF THE STORE IS COMMITTING THE FETCH_SUGGESTIONS mutation
  },
  methods: {
    setView() {
      
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