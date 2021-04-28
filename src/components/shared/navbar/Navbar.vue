<template>
  <nav class="navbar navbar-light hr-dark-themed">
    <div class="navbar-brand">
      <router-link class="nav-item" to="/"><img src="@/assets/HRLogo.png" alt=""></router-link>
    </div>
    <div class="navbar navbar-toggler">
      <router-link class="nav-item" to="/login"><img src="@/assets/Sign_in.png"  alt=""></router-link>
      <router-link class="nav-item" to="/tos"><img src="@/assets/information.png"  alt=""></router-link>
      <router-link class="nav-item" to="/results"><img src="@/assets/Map.png"  alt=""></router-link>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    
  }
})
</script>
<style lang="scss">
@import '~bootstrap/scss/bootstrap';

nav {
  padding: 15px;  
}

img {
  margin: 0px 1vw 0px 1vw;
}

.navbar img {
  width: 40px;
}

.navbar img[src="/assets/HRLogo.png"] {
  width:47px;
}

.navbar-light .navbar-toggler {
  border: 0;
}
</style>  
