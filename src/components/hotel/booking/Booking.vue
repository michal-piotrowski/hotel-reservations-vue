<template>
  <div class="component-wrapper" id="login-wrapper">
  <div class="component-container">
    <div class="row" id="hotel-content">
      <h2>Dolder Grand</h2>
      <div>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
      </div>
      <div id="book-wrapper" class="row justify-content-center">
        <button id="book-button" class="btn btn-primary">Book now</button>
      </div>   
    </div>
  </div>
</div>
</template>

<script>
  import Vue, { defineComponent } from 'vue'

  export default defineComponent({
    
  })
</script>

<style scoped>
@import '/styles.scss';

#hotel-content {
  border-radius: 12.5px;
  border: 2px solid $hr-dark-blue;
  box-shadow: $hr-box-shadow;
  margin: 0 2em;
  padding:2em;
}

.book-button {
  
}


#book-wrapper { 
  margin-top:1rem;
  height:2.4rem;
  width:100%;
}
</style>