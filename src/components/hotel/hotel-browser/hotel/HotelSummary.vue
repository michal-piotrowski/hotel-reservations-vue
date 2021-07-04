<template>
  <div @click="$store.commit(storeNames.mutations.SET_SELECTED_HOTEL_INDEX, arrayPos)"> 
    <div :class="[expanded ? 'selected-hotel-row' :'unselected-hotel-row', 'hotel-row']">
      <div class="row">
        <div id="hotel-thumb-wrapper">
          <img id="hotel-img-thumb" src="@/assets/map/distance-ico-path.png">
        </div>
        <div class="col-md-9 summary">
          <h3 for="search-input" v-html="hotelSummary.caption" class="hotel-info-label"></h3>
          <div class="hotel-info-label">
            <img id="distance-icon" src="@/assets/map/distance-ico-no-bg.png">
            <label for="search-input">{{distanceFromSearched}}m from searched location in a straight line</label>
          </div>
          <div class="hotel-info-label">
            <img id="place-icon" src="@/assets/map/place.png">
            <label for="search-input">{{formattedGeo}}</label>
          </div>
        </div>
      </div>
      <hr v-if="expanded"/>
      <div v-if="expanded" id="book-btn-wrapper">
        <button id="book-now-btn" class="btn btn-primary">Book now</button>
        <button @click="goToDetails(arrayPos)" id="book-details-btn" class="btn btn-secondary">Show details</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import HrTool from '@/helpers/HrTool.js';
import {formFields, names as storeNames} from '@/store/store.js';
import {names as routerNames} from '@/router';

export default {
  props: {
    arrayPos: null,
    hotelSummary: null,
  },
  methods: {
    goToDetails(arrayPos) {
      this.$router.push('/results/' + arrayPos);

    }
  },  
  data() {
    return {
      routerNames,
      HrTool,
      formFields,
      storeNames,
    }
  },
  computed: {
    ...mapGetters({
       get_fetched_destination: 'get_fetched_destination',
       get_location_form_data: 'get_location_form_data',
       get_currently_selected_hotel_index: 'get_currently_selected_hotel_index'
    }),
    distanceFromSearched() {
      const suggestion = this.get_location_form_data[formFields.SUGGESTION];
      return HrTool.distance(suggestion.lat, suggestion.lon, this.hotelSummary.latitude, this.hotelSummary.longitude);
    },
    formattedGeo() {
      const suggestion = this.get_location_form_data[formFields.SUGGESTION];
      return HrTool.formatGeo(suggestion.lat + ", " + suggestion.lon);
    },
    expanded() {
      return this.arrayPos == this.get_currently_selected_hotel_index
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles.scss';

.selected-hotel-row {
  background: linear-gradient(#FFF,#FFF) padding-box,
    linear-gradient(to bottom, #FFF, #4654CF) border-box;
}

.unselected-hotel-row:hover {
  background-color: white;
  transition: all 0.1s;
}

#distance-icon, #place-icon {
  width:35px;
  margin-right:0.5em;
}

.summary {
  margin-left:1em;
  padding-left:0;
}
  
.hotel-row {
  border-radius: 8px;
  padding: 3px;
  margin: 5px 50px 15px 50px;
  border: 3px solid transparent;
  box-shadow: $hr-box-shadow;
}

#book-now-btn, #book-details-btn {
  font-family: 'Poppins';
}
#book-btn-wrapper {
  text-align: center;
  margin-bottom:1em
}

#book-now-btn {
  margin-right:15px;
}
#book-details-btn {
  margin-left: 15px;
}

#hotel-thumb-wrapper {
  width:19%;
  padding-left:1em;
}
#hotel-img-thumb {
  height:115px;
  margin:0.3em;
}

.hotel-info-label {
  width:100%;
}
</style>