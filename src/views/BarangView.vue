<template lang="">
  <div class="w-100 shadow p-4">
    <div class="w-100 pb-2">
      <h4>Dashboard</h4>
      <div class="d-flex justify-content-between">
        <h5>Barang</h5>
        <div>
          <router-link to="/tambahbarang" class="btn btn-success"
            >Tambah Barang</router-link
          >
        </div>
      </div>
      <div class="form-outline py-2 d-flex">
        <input type="search" id="form1" class="form-control" placeholder="Search Data" aria-label="Search" v-model="search" />
        <button class="btn btn-secondary ps-2" @click="searchingData">search</button>
      </div>
    </div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">nama barang</th>
            <th scope="col">stok</th>
            <th scope="col">harga</th>
            <th scope="col">nama Supplier</th>
            <th scope="col">No Tlp Supplier</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="data?.length>0" v-for="(datas,index) in data" :key="datas.id">
            <th scope="row">{{ index + 1 }}</th>
            <th>{{ datas?.namaBarang }}</th>
            <th>{{ datas?.stok }}</th>
            <th>{{ datas?.harga }}</th>
            <th>{{ datas?.supplier?.namaSupplier }}</th>
            <th>{{ datas?.supplier?.noTelp }}</th>
            <th class="">
              <button @click="deleteData(data.id)" class="btn btn-danger mx-3">
                Hapus
              </button>
              <router-link :to="`/barang/${data.id}`" class="btn btn-warning"
                >Update</router-link
              >
            </th>
          </tr>
          <tr v-else v-for="(data, index) in getData" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <th>{{ data.namaBarang }}</th>
            <th>{{ data.stok }}</th>
            <th>{{ data.harga }}</th>
            <th>{{ data.supplier.namaSupplier }}</th>
            <th>{{ data.supplier.noTelp }}</th>
            <th class="">
              <button @click="deleteData(data.id)" class="btn btn-danger mx-3">
                Hapus
              </button>
              <router-link :to="`/barang/${data.id}`" class="btn btn-warning"
                >Update</router-link
              >
            </th>
          </tr>
        </tbody>
      </table>
    <div class="d-flex justify-content-end p-4">
      <div class="px-2">
        <button  @click="previouspage" class="btn btn-primary">Previous Page</button>
      </div>
      <button @click="nextpage" class="btn btn-primary">Next Page</button>
      <h5>{{ page }}</h5>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      search: "",
    };
  },
  created() {
    this.$store.dispatch("GET_DATA");
    this.$store.dispatch("ALL_DATA")
  },
  watch:{
    data(oldValue,cuerrenvalue){
      console.log(oldValue,cuerrenvalue)
    }
  },
  mounted(){
   console.log('mounted')
   console.log(this.data)
  },
  computed: {
    getData() {
      return this.$store.state.barang;
    },
    page() {
      return this.$store.state.offset;
    },
    data(){
      return this.$store.state.hasilFilter;
      
      
    },

    

  },

  methods: {
  
    nextpage() {
      this.$store.commit("NEXTPAGE_DATA")
      this.$store.dispatch("GET_DATA")
    },
    previouspage() {
      this.$store.commit("PREVIOUS_DATA")
      this.$store.dispatch("GET_DATA")
    },

    deleteData(id) {
      console.log(id);
      this.$store.dispatch("DELETE_BARANG", id);
    },
    searchingData(){
      console.log(this.data)
      this.$store.commit("FILTERDATA",this.search);
    }
  },
};
</script>
<style lang=""></style>
