<template lang="">
  <div class="w-100 shadow p-4"> 
    <div class="w-100 pb-2 ">
        <h4>Dashboard</h4>
        <div class="d-flex justify-content-between">
         <h5>Supplier</h5>
         <router-link to="/tambahSupplier" class="btn btn-success">Tambah Supplier</router-link>
        </div>
    </div>
      <table class="table  table-dark">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">nama Supplier</th>
            <th scope="col">alamat</th>
            <th scope="col">No Tlp Supplier</th>
            <th scope="col text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data,index) in getDataBarang" :key="index">
            <th scope="row">{{index+1}}</th>
            <th>{{data.namaSupplier}}</th>
                <th>{{data.alamat}}</th>
                <th>{{data.noTelp}}</th>
                <th><button @click="deleteDataSupplier(data.id)" class="btn btn-danger m-4">Hapus</button> <router-link :to="`/supplier/${data.id}`" class="btn btn-warning">Update</router-link></th>
          </tr>
          
        </tbody>
      </table>
      <div class="d-flex justify-content-end p-4">
      <div class="px-2">
        <button class="btn btn-primary">Previous Page</button>
    </div>
     <button  class="btn btn-primary">Next Page</button>
   
      </div>
</div>
</template>
<script>
export default {
    created(){
      this.$store.dispatch('GET_DATA_SUPPLIER')
     
    },
    computed:{
      getDataBarang() {
            return this.$store.state.supplier;
        },
    },
    methods:{
      deleteDataSupplier(id){
      this.$store.dispatch('DELETE_SUPPLIER',id)
    },
    }
}
</script>
<style lang="">
    
</style>