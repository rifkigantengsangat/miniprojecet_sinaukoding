import { createStore } from "vuex";
import router from '@/router'
import axios from "axios";
export default createStore({
  state: {
    token: localStorage.getItem("token") || "",
    barang: [],
    supplier :[],
    barangId :[],
    message:'',
    page: 1,
    username : localStorage.getItem("profile") || "",
  },
  getters: {},
  mutations: {
    allData(state, data) {
      state.barang = data;
    },
    supplierData(state, data) {
     state.supplier = data;
    },
    MESSAGE(state, message) {
      state.message  = message;
    },
    NEXTPAGE(state){
      state.page++
    },
    BARANG_ID(state,barangId){
      state.barangId = barangId;
    }
   
  },
  actions: {
    async REGISTER_USER({ commit }, payload) {
      const response = await axios.post(
        "http://159.223.57.121:8090/auth/register",
        payload
      );
      if(response.status ===200){
        commit('MESSAGE',response.data.message)
        setTimeout(() => { 
        router.push("/");
         }, 3000)
      }

    
     
    },
    async LOGIN_USER({ commit }, payload) {
      const { data } = await axios.post(
        "http://159.223.57.121:8090/auth/login",
        payload
      );
      if(data.status == "OK"){
        localStorage.setItem("token", data?.data?.token);
        localStorage.setItem("profile", data?.data?.profileName);
         router.push('/dashboard')
      }
    },
    async GET_DATA({ commit }) {
      const {data} = await axios.get(
        " http://159.223.57.121:8090/barang/find-all",
        {
          headers: {
            Authorization: `Bearer ${this.state.token}`,
          },
          params: {
            offset: 10,
            limit:15,
            page: this.state.page 
          },
        }
      );
      console.log(data)
      commit("allData", data?.data);
      
    },
    async GET_DATA_SUPPLIER({ commit }, id){
     const {data} = await axios.get('http://159.223.57.121:8090/supplier/find-all',{
        headers: {
          'Authorization' : 'Bearer ' + this.state.token,    
         },
         params:{
          offset:0,
          limit:15,
          page:this.state.page
         }
      })
      console.log(data)
      commit('supplierData',data.data)
    },
    async DELETE_BARANG({commit,dispatch},payload){
        await axios.delete('http://159.223.57.121:8090/barang/delete/'+payload,{
          headers:{
            'Authorization' : 'Bearer ' + this.state.token,
          }
        })
        dispatch('GET_DATA')
    },
   async UPDATE_BARANG (payload,id){
    const response = await axios.put(`http://159.223.57.121:8090/barang/update/${id}`,payload,{
      headers:{
        'Authorization' : 'Bearer ' + this.state.token
      }
    })
    console.log(response)
   },
   async GET_DATA_ID_BARANG({commit},id){
    console.log(id)
      const {data} = await axios.get(`http://159.223.57.121:8090/barang/find-by-id/${id}`,{
        headers: { 
          'Authorization' : 'Bearer ' + this.state.token,
        }
      })
      console.log(data)
      commit('BARANG_ID', data.data)
   }
  },
  modules: {},
});
