<template>
  <div class="container-fluid vh-100  d-flex align-items-center justify-content-center">
    <div class="w-100 h-75  d-flex align-items-center justify-content-space-around">
  <div class="w-50 d-flex align-items-center justify-content-center">
      <img class="img-fluid block " src="https://d1fdloi71mui9q.cloudfront.net/At3MqohDQqSxTPVAScKm_75ade16bfde4bb8466c56dc94dbefc8d">
  </div>
  <div class="w-25  px-4 py-4 shadow">
      <form @submit.prevent="login">
          <div>
              <h3 class="text-center">Login</h3>
          </div>
          <div class="mb-3">
              <label class="form-label" for="inputEmail">Username</label>
              <input type="email" v-model="Username" class="form-control rounded-3" id="inputEmail" placeholder="Username">
          </div>
          <div class="mb-3">
              <label class="form-label" for="inputPassword">Password</label>
              <input type="password" v-model="Password" class="form-control" id="inputPassword" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary w-100 rounded rounded-3">Sign up</button>
         <router-link to="/register" class="mt-4 text-dark block">Belum Punya Akun?</router-link>
      </form>
  </div>
    </div>
      </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'LoginView',
  data() {
    return {
      Username: "",
      Password: "",
    };
  },
  methods: {
    login(){
      const config ={
        username:this.Username,
        password:this.Password,
      }
      this.$store.dispatch('LOGIN_USER',config)
    },
    
   
  },
  
  
  
}
</script>
