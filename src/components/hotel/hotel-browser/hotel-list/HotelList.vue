<template>
  <div id="hotel-list-wrapper">
    <div v-if="isFetching" style="text-align: center; color: gray" >
      <fa icon="spinner" spin="true" size="2x"></fa>
    </div>

    <hotel-summary v-else v-for="(hotelSummary, ind) of get_fetched_destinations" :hotelSummary="hotelSummary" :arrayPos="ind" :key="ind"/>
  </div>
</template>

<script>
import Vue, { defineComponent } from 'vue';
import {mapGetters} from 'vuex';
import HotelSummary from '../hotel/HotelSummary.vue';
import {isEmpty} from 'lodash';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default defineComponent({
  components: { HotelSummary, FontAwesomeIcon },
  data() {
    faSpinner
  },  
  computed: {
    ...mapGetters({
      get_fetched_destinations: 'get_fetched_destinations',
      fetching_state: 'fetching_state'
    }),
    isFetching() {
      return this.fetching_state == 'fetching';
    }
  },
  watch: {
    fetching_state(val) {
      if (!isEmpty(val)) {
        document.querySelector('#leaflet-map').scrollIntoView();
         
      }
    }
  }
})
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