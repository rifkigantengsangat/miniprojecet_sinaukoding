<script>
import router from '@/router'
export default {
    props:{
        username:String,
    },
    data(){
        return{
            username : this.username
        }
    },
    methods:{
        logout(){
            localStorage.clear();
             setTimeout(()=>{
                router.push({
                    path : "/"
                },3000)
             })
        }
    }
   


}
</script>
<template>
    
    <div class="container-side">
        <div class="card" style="width: 18rem;">
            <img src="https://hips.hearstapps.com/hmg-prod/images/olivia-sour-1621618459.jpg?crop=0.5xw:1xh;center,top&resize=640:*" class="card-img-top" alt="gambar">
            <div class="card-body">
              <h5 class="card-title text-center">{{username}}</h5>
            </div>
          </div>
          <div class="card mt-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title text-center ">Menu</h5>
                <router-link class="w-100 d-flex text-dark text-decoration-none" to="/dashboard">Barang</router-link>
                <router-link class="w-100 d-flex text-dark text-decoration-none" to="/supplier">Supplier</router-link>
                <button @click="logout" class="btn btn-danger d-block w-100 pt-2 mt-2">Logout</button>
            </div>
            
          </div>
    </div>
</template>
<style scoped>
.container-side{
    width: 300px;

}
.dashboard{
    display: block;
    width: 100%;
    color : blue
}
.supplier{
  color:black;
  display: block;
  width: 100%;
}
</style>