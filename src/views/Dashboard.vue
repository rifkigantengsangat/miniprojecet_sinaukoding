<template>
  <div class="container-fluid vh-100 mt-4 d-flex">
    <Sidebar :username="username"/>
    <div class="w-75 pl-4">
     <router-view></router-view>
    </div>
     
   
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar.vue";
import BarangView from "./BarangView.vue";
export default {
    data() {
        return {};
    },
    created() {
        this.$store.dispatch("GET_DATA");
    },
    computed: {
        getData() {
            return this.$store.state.barang;
        },
        username() {
            return this.$store.state.username;
        }
    },
    components: { Sidebar, BarangView }
}
</script>
