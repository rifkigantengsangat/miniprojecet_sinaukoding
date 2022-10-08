<template lang="">
  <div
    class="d-flex vh-100 container-fluid align-items-center justify-content-center">
    <div class="w-50 shadow p-4">
    <form @submit.prevent="tambahBar">
      <div class="row mb-3">
        <label for="inputbarang" class="col-sm-2 col-form-label">Nama Barang</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputbarang" placeholder="masukan nama barang" v-model="namabarang">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputharga" class="col-sm-2 col-form-label">Harga Barang</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputharga" placeholder="masukan harga barang" v-model="hargabarang">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputstok" class="col-sm-2 col-form-label">stok barang</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputstok" placeholder="masukan stok barang" v-model="StokBarang">
        </div>
      </div>
      <div class="row mb-3">
        
        <label for="inputsupp" class="col-sm-2 col-form-label">Supplier</label>
        <div class="col-sm-10">
          <input type="text" class="form-control mb-1" id="inputsupp" placeholder="masukan Nama supplier" v-model="namasupplier">
          <input type="text" class="form-control mb-1" placeholder="Masukan Alamat Supplier"  v-model="alamatsupplier">
          <input type="text" class="form-control" placeholder="Masukan No Telp Supplier" v-model="nosupplier">
        </div>
      </div>
      <hr>
      <div class="d-flex justify-content-between align-items-center">
        <button type="submit" class="btn btn-primary">Kembali</button>
        <button type="button" class="btn btn-primary">Update</button>
      </div>
    </form>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      namabarang: "",
      hargabarang: "",
      StokBarang: "",
      namasupplier: "",
      alamatsupplier: "",
      nosupplier: "",

    };
  },
  methods: {
    tambahBar(){
      console.log('disni')
      const config = {
        namaBarang : this.namabarang,
        harga : parseInt(this.hargabarang),
        stok: parseInt(this.StokBarang),
        supplier : {
          namaSupplier : this.namasupplier,
          alamat : this.alamatsupplier,
          noTelp : this.nosupplier

        }
      }
      console.log(config)
      this.$store.dispatch("CREATE_BARANG",config)
    }
  },
};
</script>
<style lang=""></style>
