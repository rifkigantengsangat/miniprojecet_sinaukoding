<script>
export default {
    props:{
        username:String,
    },
    data(){
        return{
            username : this.username
        }
    }

}
</script>
<template>
    <div class="container-side">
        <div class="card" style="width: 18rem;">
            <img src="https://hips.hearstapps.com/hmg-prod/images/olivia-sour-1621618459.jpg?crop=0.5xw:1xh;center,top&resize=640:*" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">{{username}}</h5>
            </div>
          </div>
          <div class="card mt-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title text-center ">Menu</h5>
                <router-link class="d-block bg-success" to="/dashboard">Barang</router-link>
                <router-link to="/supplier">Supplier</router-link>

            </div>
            
          </div>
    </div>
</template>
<style scoped>
.container-side{
    width: 300px;

}
</style>