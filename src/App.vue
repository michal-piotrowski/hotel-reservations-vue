<template>
<div>
  <Navbar/>
  <div>
    <div style="min-height:60%">
      <router-view/>
    </div>
    <div id="footer" class="row">
      <div id="footerLinks" style="margin-left:20vw">
        <p>© Hotel Reservations</p> 
        <p>All rights reserved</p>
        <p>About us</p>
        <p>Contact</p>
        <p>Legal</p>
        <p>Terms of use</p>
        <p>GDPR</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from './components/shared/navbar/Navbar.vue';
import {defineComponent} from 'vue';
import HrAxios from './http/HrAxios';

export default defineComponent({
  components: { Navbar },
  
});
</script>

<style lang="scss">

@import '@/styles.scss';


#sloganLeft { 
  color: white;
  text-shadow: 0 0 5px black;
  font-size: 20pt;
  font-family:'Palanquin-Dark';
}

#formMiddle { 
  height:38vw
}
//
#landing-where { 
  background-color:white;
  margin-top:1rem;
  height:2.4rem;
  box-shadow: 0 0 10px;
  opacity:0.93;
  z-index: 3;
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
  width:calc(100% - 2.4em);
  float:left 
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
  width:calc(100% - 2.4em);
  float:left;
  font-family: 'Open-Sans-Italic';
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
  font-family: 'Lato-Bold';
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
