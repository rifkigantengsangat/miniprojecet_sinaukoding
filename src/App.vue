<script>
  import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
export default {
  components:{
    Footer,
    Navbar
},
computed : {
   noRouting(){
    if(this.$route.path === '/' || this.$route.path === '/register'){
      return true
    }else{
      return false
    }
   }
}

}
</script>
<template>
  <div v-if="noRouting">
  </div>
  <div v-else>
    <Navbar/>
  </div>
  <Footer/>
  <router-view/>
</template>

<style>

</style>
