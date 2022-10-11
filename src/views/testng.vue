<template>
    <div class="container">
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="img-with-text">
              <img src="../../assets/img/sinaulogo.png" alt="sometext" />
              <h1>Selamat Datang</h1>
              <p>Some text</p>
            </div>
  
            <div class="card">
              <h5 class="card-header chead text-center">Login</h5>
              <div class="card-body">
                <form @submit.prevent="submitData">
                  <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" v-model="username" class="form-control" placeholder="Enter username" />
                  </div>
                  <div class="form-group">
                    <label for="">Password</label>
                    <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
                  </div>
                  <div class="text-center mt-2">
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <br />
                    <a href="">belum Punya Akun</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  
  export default {
    name: "AuthLogin",
    data: function () {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      async submitData() {
        const body = {
          username: this.username,
          password: this.password,
        };
        const {data} = await axios.post('url',body);
        if(data.status  ==='OK'){
            
        }
      },
    },
  };
  </script>
