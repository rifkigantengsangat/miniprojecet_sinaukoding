<template lang="">
  <div
    class="d-flex vh-100 container-fluid align-items-center justify-content-center">
    <div class="card w-50">
      <div class="card-body">
        <div>
          <h4>Tambah Barang</h4>
        </div>
        <div class="m-sm-4">
          <form>
            <div
              class="form-group d-flex align-items-center pr-2 justify-content-between"
            >
              <label>Nama Barang</label>
              <input
                class="form-control form-control-lg"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div
              class="form-group d-flex align-items-center my-2 w-100 justify-content-between"
            >
              <div>
                <label>Harga Barang</label>
              </div>
              <div>
                <input
                  class="form-control form-control-lg w-100"
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                />
              </div>
            </div>
            <div class="form-group d-flex align-items-center my-2">
              <label>Stok Barang</label>
              <input
                class="form-control form-control-lg"
                placeholder="Enter your email"
              />
            </div>
            <div class="form-group d-flex align-items-center my-2">
              <label>Supplier</label>
              <input
                class="form-control form-control-lg"
                placeholder="Enter password"
              />
            </div>
            <div class="text-center mt-3">
              <!-- <button type="submit" class="btn btn-lg btn-primary">Sign up</button> -->
            </div>
          </form>
        </div>
      </div>
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
      supplier: "",
    };
  },
};
</script>
<style lang=""></style>
