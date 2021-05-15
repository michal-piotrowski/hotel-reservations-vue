<template>
  <div>
    <div id="search-input-wrapper">
      <img id="search-icon" src="@/assets/map/magnif_glas.png" />
      <label class="search-input-label" for="search-input">{{ $filters.translate("Searched:")}}</label>
      <input v-model="searchText" type="text" id="search-input" />
    </div>
    <div id="date-pickers-wrapper">
      <div id="date-from-wrapper">
        <img id="search-icon" src="@/assets/date_range_24px_outlined.png" />
        <label class="search-input-label" for="search-input">{{ $filters.translate("Check-out")
        }}</label>
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
  </div>
</template>

<script>
import {defineComponent} from "vue";


export default defineComponent({
  created() {
    console.log(this);
  },
  data() {
    searchText,
    dateFrom, 
    dateTo
  }
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