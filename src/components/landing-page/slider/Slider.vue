<template>
  <div id="sliderForm">
    <div id="sliderImgWrapper">
      <div id="sliderImg"></div>
    </div>
    <div class="col-md-4 midpageComponent" id="sloganLeft">Begin your journey</div>
    <div class="col-md-4 midpageComponent" id="formMiddle">
      <div class="container" id="form-container">
        <div id="textBanner" class="row ">
          <p id="text-mid">Looking for a hotel?</p>
        </div>
        <div class="row" id="landing-where">
          <img id="landing-where-image" src="@/assets/locationIcoFilled_purp.png"/>
          <Suggestions 
            :collection="collection"
            @location-selected="handleLocationSelected"
            ref="search-suggestions"
            :inputStyle="'position: relative;z-index: 2;'"
            @input="queryMatching($event.target.value)"
            :containerStyle="{width: 'calc(100% - 2.8em)'}"
            :placeholder="'Your searched location'"/>
        </div>
        <div class="row">
          <div id="landing-from-wrapper" class="col-sm-6">
            <div id="landing-from" >
              <input @input="handleDateFromSelected" id="landing-date-from-input" ref="date-from" class="form-control" type="date" placeholder="Date from" />
            </div>
          </div>
          <div id="landing-to-wrapper" class="col-sm-6">
            <div id="landing-to" >
              <input @input="handleDateToSelected" id="landing-date-to-input" ref="date-to" class="form-control" type="date" placeholder="Date to"/>
            </div>
          </div>
        </div>
        <div class="row justify-content-center" id="search-wrapper">
          <button @click="searchHotels" :disabled="shouldDisableSearch" id="search-button" class="btn btn-primary">Search</button>
        </div>
      </div>
    </div>   
    <div class="col-md-4 midpageComponent" id="sloganRight">Search locations around the globe using combined data from major hotel searches</div>
  </div> 
</template>

<script>
import {defineComponent} from 'vue';
import {  mapGetters } from 'vuex';
import { names as storeNames, formFields } from '@/store/store.js';
import { debounce } from 'lodash';
import Suggestions from '../../../inputs/inputWithSuggestions/Suggestions.vue';
import {eventNames} from '@/store/eventNames.js';
import { names as routerNames } from '@/router';


export default defineComponent({
  components: { Suggestions },
  mounted() {
  },
  data() {
    return {
      searchValue: null,
      collection: null
    }
  },
  methods: {
    handleDateToSelected(event) {
      this.$store.dispatch(storeNames.actions.MERGE_LOCATION_FORM_VALUE, {value: event.target.value, fieldName: formFields.DATE_TO} )
    },
    handleDateFromSelected(event) {
      this.$store.dispatch(storeNames.actions.MERGE_LOCATION_FORM_VALUE, {value: event.target.value, fieldName: formFields.DATE_FROM} )
    },
    handleLocationSelected(suggestion) {
      this.$store.dispatch(storeNames.actions.MERGE_LOCATION_FORM_VALUE, {value: suggestion, fieldName: formFields.SUGGESTION});
      this.clearCollection();
    },
    clearCollection() {
      this.collection = null;
      // this.$refs['search-suggestions'].collection = null;
    },  
    searchHotels() {
      this.$router.push(routerNames.RESULTS);
      this.$store.dispatch(storeNames.actions.SEARCH_DESTINATIONS);
    },
    debouncedQueryMatch: debounce(function (value, vm) {
      vm.$store.dispatch(storeNames.actions.FETCH_SUGGESTIONS, value)
        .then(response => {
          this.collection = vm.get_suggestions;
        })
    }, 1000),
    queryMatching(value) {
      this.searchValue = value;
      this.debouncedQueryMatch(value, this);
    }
  },
  computed: {
    ...mapGetters([
      'get_suggestions',
      'get_location_form_data'
    ]),
    shouldDisableSearch() {
      return !this.get_location_form_data || !this.get_location_form_data[formFields.SUGGESTION];
    }  
  }
})
</script>

<style lang="scss">
@import '@/styles.scss';


$body-bg:  #111C7B; // overwritten bootstrap variable
/* Importing Bootstrap SCSS file. */

input[type=date]::-webkit-calendar-picker-indicator {
  color: #111C7B;
  background-image: url('~@/assets/date_range_24px_outlined.png');
}

#text-mid {
  margin: 0;
}

#sloganRight { 
  color: white;
  font-size: 10pt;
  text-shadow: 0 0 3px black;
  text-align:right;
  font-family:'Palanquin-Dark';

}

#sloganLeft { 
  color: white;
  text-shadow: 0 0 5px black;
  font-size: 20pt;
  font-family:'Palanquin-Dark';
}

#formMiddle { 
  height:38vw
}

#landing-where { 
  background-color:white;
  margin-top:1rem;
  height:2.4rem;
  box-shadow: 0 0 10px;
  opacity:0.93;
  z-index: 3;
  position: relative;
}
#landing-where-image {width: 1.3em;
   height: 1.3em; 
   margin-left: 0.3em;
   margin-top: 0.54em;
}

#landing-from { 
  padding:0;
  box-shadow:0 0 10px;
  opacity:0.93;
  font-family: 'Open-Sans-Italic';
}
#landing-date-from { 
  width: 15px;
  height: 15px;
  margin: 0.5em;
  margin-top:0.65em;
  float:left
}
#landing-date-from-input {border: none;
  padding-left:0.2em;
  // width:calc(100% - 2.4em);
  float:left;
    text-align: center;
  width: 100%
}
#landing-to { 
  padding:0;
   box-shadow:0 0 10px;
  opacity:0.93
}
#landing-date-to { 
  width: 15px;
  height: 15px;
  margin: 0.5em;
  margin-top:0.65em;
  float:left
}
#landing-date-to-input { 
  border: none;
  padding-left:0.2em;
  // width:calc(100% - 2.4em);
  float:left;
  font-family: 'Open-Sans-Italic';
  text-align: center;
  width: 100%
}

#sub-wrapper {
  min-height:60%;
}

#search-wrapper { 
  margin-top:1rem;
  height:2.4rem;
}

#footerLinks {
  margin-left:20vw;
  p {
    font-family: 'Patua-One';
    font-size: 10pt;
  }
}

#footer {
  margin-left: 0;
  margin-right: 0;
}


#search-button{ 
  box-shadow: 0 0 10px;
  color:white;
}

#formMiddle {
  margin-top:1%
}

#sliderForm {
  position: relative;
  height:42vw; 
}

#landing-from-wrapper {
  padding-left:0; 
  padding-right:7px;
}

#landing-to-wrapper {
  padding-left: 7px;
  padding-right:0;
}

#textBanner, #landing-where {
  border-radius: 4px;
  border:none
}

#landing-from, #landing-to {
  margin-top: 1em;
  height:2.2em;
  background: white;
  border-radius: 4px;
}
#landing-to {
  margin-top: 1em;
}

.placeholder_layout {
  color: #555555;
  font-style: Italic;
}

.input_layout {
  font-style:normal;
}

p {
  color: white;
  font-family: 'Passion-One';
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom:0
}

.container .row input {
  font-size: 10pt;
  font-style: italic;
}
#sliderImgWrapper {
  position: absolute;
  width:100%; 
  margin:0; 
  overflow:hidden;
  height:42vw;
}

#sliderImg {
  width: 100%;
  height:100%;
  background: url('~@/assets/StockPhotos/Ochryda_Sileks.jpg') no-repeat 50% 50%;
  background-size: 100% 100% !important;
} 

#sliderImgWrapper div {
  width: 100%;  
  border-top: 8px solid #2e2aa8;
  border-bottom: 8px solid #2e2aa8;
}

#textBanner, #sloganLeft, #sloganRight {
  justify-content: center;
  height:38vw;
}
#textBanner {
  height: 15vh;
  background-color: white;
  box-shadow: 0 0 10px;
  opacity:0.93
}
#textBanner p {
  color: $body-bg;
}
.midpageComponent {
  float:left;
  display:flex;
  align-items:center;
  height:300px;
}
#sliderImgWrapper::after {
  content: '';
  top:0; left:0; right:0; bottom:0;
  position: absolute;
  -webkit-box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, 0.5);
  -ms-box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, 0.5);
  -o-box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, 0.5);    
} 

@include media-breakpoint-down(sm) {
  #sloganLeft {
    height:3em;
  } 
 }

 @include media-breakpoint-down(sm) {
  #sliderImgWrapper {
    height:70vh;
  } 
  #sliderImg {
    background-size: 160vh 100% !important;
  } 
 }

 @include media-breakpoint-down(sm) {
  #sloganRight {
    display:none;
  } 
  #sliderForm {
    height: 70vh;
  }
 }

 @include media-breakpoint-down(xs) {
  #landing-from-wrapper {
    padding-right:0;
  } 
  #landing-to-wrapper {
    padding-left:0;
  }
  #sloganLeft {
    display: none;
  }
  #form-container {
    margin-top:15em
  }
 }
</style>