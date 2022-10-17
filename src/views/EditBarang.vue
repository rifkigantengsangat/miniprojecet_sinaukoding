<template lang="">
  <div
    class="d-flex vh-100 container-fluid align-items-center justify-content-center"
  >
    <div class="w-50 shadow p-4">
      <form @submit.prevent="editBarang">
        <div class="row mb-3">
          <label for="inputbarang" class="col-sm-2 col-form-label"
            >Nama Barang</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputbarang"
              placeholder="masukan nama barang"
              v-model="namabarang"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputharga" class="col-sm-2 col-form-label"
            >Harga Barang</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputharga"
              placeholder="masukan harga barang"
              v-model="hargabarang"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputstok" class="col-sm-2 col-form-label"
            >stok barang</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputstok"
              placeholder="masukan stok barang"
              v-model="StokBarang"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputsupp" class="col-sm-2 col-form-label"
            >Supplier</label
          >
          <div class="col-sm-10">
            <select class="w-100" v-model="supplier" >
              <option v-for="(supp,index) in Supplier" :value="supp" > {{supp.namaSupplier}}</option>
            </select>
          </div>
        </div>
        <hr />
        <div class="d-flex justify-content-between align-items-center">
          <button type="submit" class="btn btn-primary">Kembali</button>
          <button type="button" class="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      namabarang: "",
      hargabarang: "",
      StokBarang: "",
      namaSupplier : "",
      supplier : {},
    
    };
  },
  created(){
  this.fetchDataId();
  this.$store.dispatch('GET_DATA_SUPPLIER')

  },
  computed:{
    Supplier(){
      return this.$store.state.supplier
    }
  },
  methods:{
    async fetchDataId(){
        const {data} = await axios.get(`http://159.223.57.121:8090/barang/find-by-id/${this.$route.params.id}`,{
        headers: { 
          'Authorization' : 'Bearer ' + this.$store.state.token,
        }
      })
      
      this.namabarang =data.data.namaBarang
      this.hargabarang = data.data.harga
      this.StokBarang = data.data.stok
      this.namaSupplier  = data?.data?.supplier?.namaSupplier
      this.supplier = this.Supplier
    
     
    },
    editBarang(){
        const config = {
        namaBarang : this.namabarang,
        harga : parseInt(this.hargabarang),
        stok: parseInt(this.StokBarang),
        supplier : this.supplier
      }
      console.log("ini config",config)
      console.log("ini nama Supplier",this.namaSupplier);
      this.$store.dispatch('UPDATE_BARANG',{config : config ,params : this.$route.params.id})
    }
  }
};
</script>
<style lang=""></style>
