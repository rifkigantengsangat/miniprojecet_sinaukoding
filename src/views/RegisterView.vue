<template>
    <div class="container-fluid vh-100  d-flex align-items-center justify-content-center">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12  d-none d-lg-block ">
        <img class="img-fluid block " src="https://d1fdloi71mui9q.cloudfront.net/At3MqohDQqSxTPVAScKm_75ade16bfde4bb8466c56dc94dbefc8d">
      </div>
      <div class="col-md-12 col-lg-6 col-sm-12 col-12 shadow p-4">
        <form @submit.prevent="register">
          <div class="alert alert-success" role="alert">
            {{message}}
          </div>
          <div>
              <h3 class="text-center">Register</h3>
          </div>
          <div class="mb-3">
              <label class="form-label" for="inputName">Profile Name</label>
              <input type="text" v-model="profileName" class="form-control" id="inputName" placeholder="ProfileName">
          </div>
          <div class="mb-3">
              <label class="form-label" for="inputEmail">Username</label>
              <input type="text" v-model="userName" class="form-control rounded-3" id="inputEmail" placeholder="Username">
          </div>
          <div class="mb-3">
              <label class="form-label" for="inputPassword">Password</label>
              <input type="password" v-model="password" class="form-control" id="inputPassword" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary w-100 rounded rounded-3">Sign in</button>
         <router-link to="/" class="mt-4 text-dark block">sudah Punya Akun?</router-link>
      </form>
      </div>
     </div>
  </div>
   
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      profileName: "",
      userName: "",
      password: "",
    };
  },
  methods: {
   register(){
    const config = {
        profileName : this.profileName,
        username: this.userName,
        password: this.password,
      };
      this.$store.dispatch('REGISTER_USER',config)
   }
},
computed: {
    message(){
    return this.$store.state.message   
    }
}
}
</script>

