<template>
  <div>
    <div id="search-input-wrapper">
      <img id="search-icon" src="@/assets/map/magnif_glas.png" />
      <div class="row">
      <label class="search-input-label" for="search-input">{{ $filters.translate("Searched:")}}</label>
        <suggestions 
          ref="search-suggestions"
          :inputStyle="{border: 'none'}"
          @location-selected="handleLocationSelected"
          @input="queryMatching($event.target.value)"
          :containerStyle="{ height: '3em', width: '84%', float: 'left', minWidth: '10em'}"
          :collection="collection"
          :placeholder="get_location_form_data[formFields.SUGGESTION] && get_location_form_data[formFields.SUGGESTION].display_name"/>
        </div>
    </div>
    <div id="date-pickers-wrapper">
      <div id="date-from-wrapper">
        <img id="search-icon" src="@/assets/date_range_24px_outlined.png" />
        <label class="search-input-label" for="search-input">{{ $filters.translate("Check-out") }}</label>
        <i id="chev-date-from-left" class="fa fa-chevron-left"></i>
        <input v-model="dateFrom" placeholder="dd-mm-yyyy" type="text" class="date-input" />
        <i id="chev-date-from-right" class="fa fa-chevron-right"></i>
      </div>
      <div id="date-to-wrapper">
        <img id="search-icon" src="@/assets/date_range_24px_outlined.png" />
        <label class="search-input-label" for="search-input">{{ $filters.translate("Arrival")}}</label>
        <i id="chev-date-to-left" class="fa fa-chevron-left"></i>
        <input v-model="dateTo" placeholder="dd-mm-yyyy" type="text" class="date-input" />
        <i id="chev-date-to-right" class="fa fa-chevron-right"></i>
      </div>
    </div>
    <div style="justify-content:center; display: flex; padding: 5px 50px 15px 50px;" class="cell" >
      <button @click="handleSearch" :disabled="shouldDisableSearch" class="btn btn-primary" style="width:100%">Search</button>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import { mapGetters } from "vuex";
import Suggestions from "../../../../inputs/inputWithSuggestions/Suggestions.vue";
import {debounce} from 'lodash';
import {names as storeNames, formFields} from '@/store/store';


export default defineComponent({
  components: { Suggestions },
  created() {
    console.log(this);
  },
  computed: {
    ...mapGetters(
      ['get_suggestions','get_location_form_data'],
   ),
    shouldDisableSearch() {
      return !this.get_location_form_data || !this.get_location_form_data[formFields.SUGGESTION];
    }  
  },
  mounted() {
    this.dateFrom = this.get_location_form_data[formFields.DATE_FROM];
    this.dateTo = this.get_location_form_data[formFields.DATE_TO];
  },
  data() {
    return {
      searchText: null,
      dateFrom: null, 
      dateTo: null,
      formFields,
      collection: null,
    }
  },
  methods: {
    
    handleSearch() {
      this.$store.dispatch(storeNames.actions.SEARCH_DESTINATIONS);
    },
    debouncedQueryMatch: debounce(function (value, vm) {
      vm.$store.dispatch(storeNames.actions.FETCH_SUGGESTIONS, value)
        .then(() => {
          this.collection = vm.get_suggestions;
        })
    }, 1000),
    queryMatching(value) {
      this.searchValue = value;
      this.debouncedQueryMatch(value, this);
    },
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
    },  
  },
}); 
</script>

<style scoped>
#search-input {
  margin: 9px;
  box-sizing: border-box;
  vertical-align: middle;
  border: none;
  width: calc(100% - 8em);
  font-family: "Open-Sans-Italic";
}

.date-input {
  margin: 9px;
  width:5.5em;
  box-sizing: border-box;
  vertical-align: middle;
  border: none;
  display: flex;
  float:left;
  font-family: "Open-Sans-Italic";
}

.search-input-label{
  display: flex;
  float: left;
  margin-top: 0.55em;
  color: #4654CF;
  
}

#date-pickers-wrapper {
  padding: 5px 50px 15px 50px;
  display: flex;
}

#date-from-wrapper, #date-to-wrapper {
  border:2px solid #4654CF;
  background-color: white;
  border-radius: 7.5px;
  height:100%;
  width:100%;
}

#date-from-wrapper {
  margin-right:1em;
}

#date-to-wrapper {
  margin-left:1em;
}

#chev-date-from-left, #chev-date-from-right, #chev-date-to-left, #chev-date-to-right {
  margin-top:13px;
  display: flex;
  float:left;
}

#chev-date-from-left, #chev-date-to-left {
  margin-left: 12px
}

#search-input-wrapper {
  margin: 5px 50px 15px 50px;
  border:2px solid #4654CF;
  background-color: white;
  border-radius: 7.5px;
}

#search-icon {
  width: 1.3em;
  height: 1.3em;
  margin-right:0.3em;
  margin-left: 1em;
  margin-top:0.7em;
  float:left;
}
</style>