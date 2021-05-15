<template>
  <div class="component-wrapper" id="login-wrapper">
  <div class="row" id="login-inter-wrapper">
    <div id="login-spacer-left" class="col-md-4">
        
    </div>
    <div class="col-md-4" >
      <div id="login-component-wrapper">
        <div class="container login-component-header">
          <div class="container login-component-header sign-in">
            <span>Log in</span>
          </div>
          <div class="container login-component-header sign-up">
            <span>Sign up</span>
          </div>
        </div>
        <div class="container login-component">
          <div id="login-form-wrapper">
            <label for="email-address" id="email-address-label">E-mail address</label>
          </div>
          <div id="address-input-wrapper">
            <input id="email-address-input">
          </div>
          <label for="password" id="password-label">Password</label>
          <div id="password-input-wrapper">
            <input id="password-input">
          </div>
          <div id="signin-button">
            <button class="btn btn-primary">Sign in</button>
          </div>
        </div>
      </div>
    </div>  
    <div id="login-info" class="col-md-4">
      <div>
        <div id="info-icon-wrapper">
          <img id="info-icon" src="@/assets/login/information.png" alt="INFO">
        </div>
        <span>Creating an account will let you retrieve information about the booking you’ve made with Hotel Reservations. </span>
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

<style lang="scss" scoped>
#email-address-label, #email-address-input, #password-label, #password-input{
  width:100%;
  font-family: 'Lato-medium';
}

#signin-button {
  text-align: center; 
  padding:0.8em 0 1.4em 0;
}

#email-address-input, #password-input {
  border: 1.8px solid black;
  border-radius:3px;
}

#email-address-label, #password-label {
  font-size: 9pt;
  padding: 0 10px;
  margin:0;
}

#info-icon-wrapper {
  width:100%;
}

#info-icon {
  width:50px;

}

#address-input-wrapper, #password-input-wrapper {
  padding:0 10px;
  margin-bottom: 10px;
}
#login-inter-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
}
#login-spacer-left {
    width: 28vw;
    display: flex;
    float: left;
}

#login-component-wrapper {
  box-shadow: 0 0 5px 0; border-radius: 7.5px;
}

.login-component {
  border-radius:0 0 7.5px 7.5px;
  font-family: 'Lato-bold';
  background: white;
}

#login-wrapper {
  height:60vh;
  background: #f5f5f5;
}

#login-info {
  font-size: 10pt;
  width: 22%;
  float:left;
  justify-content: center;
  text-align: center;
}

#login-form-wrapper {
  padding-top:1em;
}

.login-component-header {
  .sign-in, .sign-up {
    width:50%;
    height:2.5em; 
    float:left;
    text-align: center;
    border-radius:7.5px 7.5px 0 0;
    display: flex;
    justify-content: center;
    align-items:center;
    font-family: 'Poppins';
    background-color: #e1e1e1;
  }
  background-color: #e1e1e1;
  border-radius:7.5px 7.5px 0 0;
  height: 2.5em;
  padding:0;
}
</style>