<template>
<div :style="containerStyle">
  <input ref="suggestions-input" @blur="delayHideCollection" @input="handleInput" id="landing-where-input" :placeholder="placeholder" :style="inputStyle" class="form-control">
  <div id="suggestion-list-wrapper">
    <ul v-if="!isEmpty(collection) && $refs['suggestions-input'].value && shouldShowCollection" ref="results" id="result-list">
      <li v-for="suggestion of collection" 
        @click.stop="suggestionClicked(suggestion)"
        :class="['suggestion-text', isSelectable(suggestion) ? 'highlightable' : '']" 
        :title="getDisplayName(suggestion)"  
        :key="'_' + suggestion.id">
        {{getDisplayName(suggestion)}}
      </li>
    </ul>
  </div>
</div>
</template>
 
<script>
import {isEmpty} from 'lodash';


export default {
  props: {
    containerStyle: null,
    placeholder:null,
    mapperFunction: Function,
    selected: null,
    inputStyle: null,
  },
  methods: {
    delayHideCollection() {
      const vm = this
      setTimeout(() => {
        vm.shouldShowCollection = false
      }, 200);
    },
    suggestionClicked(suggestion) {
      this.$refs['suggestions-input'].value = suggestion.display_name;
      this.$emit('location-selected', suggestion);
    },
    handleInput(value) {
      this.shouldShowCollection = true;
      this.$emit('input', value);
    },
    getDisplayName(suggestion) {
      return suggestion.display_name;
    },
    isSelectable(suggestion) {
      return suggestion && suggestion.display_name != 'No results found';
    }
  },
  watch: {
    collection: {
      handler(value) {
        console.log('### suggestions');
        console.log(value);
      }
    }
  },
  data() {
    return{
      shouldShowCollection: true,
      isEmpty,
      collection: [],
      highlightPosition: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles.scss';

#suggestion-list-wrapper {
  display: inline-block;
  position: relative;
  z-index: 3;
  width: 100%;
}
#landing-where-input {
  border:none;
  width:calc(100% - 5em);
  height:2.8em;
  font-family: 'Open-Sans-Italic';
}

li.suggestion-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-bottom: 0.3em;
  cursor: default;
}

li.suggestion-text:nth-child(2n) {
  background-color: #eeeeee;
}

li.highlightable:hover {
  background-color: $hr-hover-btn-color;
}

#result-list {
  width: 100%;
  background-color: white;
  font-size: 10pt;
  border-radius: 5px;
  padding: 10px;
  position: relative;
  list-style-type: none;
  box-shadow: 0 0 2px 0.3px;
  top: 1px;
}
</style>