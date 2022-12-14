import { createStore } from "vuex";
import router from '@/router'
import axios from "axios";
export default createStore({
  state: {
    token: localStorage.getItem("token") || "",
    barang: [],
   hasilFilter : [],
    supplier :[],
    allData: [],
    message:'',
    limit: 15,
    offset : 1,
    username : localStorage.getItem("profile") || "",
  },
  getters: {
    allHasilFilter: (state)=> state.hasilFilter
  },
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
   FILTERDATA (state,query){
    const filteredData  =state.allData.filter((barang)=>{
     return barang.namaBarang.toLowerCase().includes(query.toLowerCase())
    })
    state.hasilFilter= filteredData
    
   },
   ALL_DATA(state,data){
   state.allData = data
   },

    NEXTPAGE_DATA (state){
      state.offset ++
    },
    PREVIOUS_DATA(state){
    if(state.offset < 1){
      state.offset = 1
    }else{
       state.offset --
    }
    }
   
  },
  actions: {
    async REGISTER_USER({ commit }, payload) {
      const response = await axios.post(
        "http://159.223.57.121:8090/auth/register",
        payload
      );
      commit('MESSAGE',response.data.message)
      if(response.data.message ==='REGISTER SUCCESSFUL'){
        setTimeout(() => { 
          commit('MESSAGE','')
        router.push("/");
         }, 3000)
      }

    
     
    },
    async LOGIN_USER({ commit }, payload) {
      const { data } = await axios.post(
        "http://159.223.57.121:8090/auth/login",
        payload
      );
      commit('MESSAGE',data.message);
      if(data.message =="LOGIN SUCCESS"){
        localStorage.setItem("token", data?.data?.token);
        localStorage.setItem("profile", data?.data?.profileName);
         setTimeout(()=>{
          router.push({
            path : '/dashboard',
          })
          window.location.reload();
          commit('MESSAGE','')
         },2000)
      }
    },
    async ALL_DATA({commit}){
   const {data} = await axios.get( " http://159.223.57.121:8090/barang/find-all",
   {
     headers: {
       Authorization: `Bearer ${this.state.token}`,
     },
     params: {
       offset: 0,
       limit:200,
       
     },
   })
    commit('ALL_DATA' ,data?.data)
    },
    async GET_DATA({ commit }) {
      const {data} = await axios.get(
        " http://159.223.57.121:8090/barang/find-all",
        {
          headers: {
            Authorization: `Bearer ${this.state.token}`,
          },
          params: {
            offset: this.state.offset,
            limit:15
            
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
         
         }
      })
     
      commit('supplierData',data.data)
    },
    async CREATE_BARANG ({commit},payload){
     const response = await axios.post('http://159.223.57.121:8090/barang/create',payload,{
      headers:{
        'Authorization' : 'Bearer ' + this.state.token
      }
     })
      if(response.data.status === "OK"){
        commit("MESSAGE",response.data.message)

        setTimeout(()=>{
          commit("MESSAGE",'')
           router.push({
            path : '/dashboard'
           })
        },4000)
      }
   
    },
    async DELETE_BARANG({commit,dispatch},payload){
        await axios.delete('http://159.223.57.121:8090/barang/delete/'+payload,{
          headers:{
            'Authorization' : 'Bearer ' + this.state.token,
          }
        })
        dispatch('GET_DATA')
    },
   async UPDATE_BARANG ({commit},{config,params}){
    const response =  await axios.put('http://159.223.57.121:8090/barang/update/'+params,config,{
      headers:{
        'Authorization' : 'Bearer ' + this.state.token
      }
    })
    if(response.status ===200){
      router.push('/dashboard')
    }
   },
   async CREATE_SUPPLIER ({commit},payload){
    const response = await axios.post('http://159.223.57.121:8090/supplier/create',payload,{
     headers:{
       'Authorization' : 'Bearer ' + this.state.token
     }
    })
   
   },
   async DELETE_SUPPLIER({commit,dispatch},payload){
    await axios.delete('http://159.223.57.121:8090/supplier/delete/'+payload,{
      headers:{
        'Authorization' : 'Bearer ' + this.state.token,
      }
    })
    dispatch('GET_DATA_SUPPLIER')
},
async UPDATE_SUPPLIER ({commit},{config,params}){
  await axios.put('http://159.223.57.121:8090/supplier/update/'+params,config,{
    headers:{
      'Authorization' : 'Bearer ' + this.state.token
    }
  })
 },
 async SEARCH_BARANG({commit},params){
  try {
    const response =  await axios.get('http://159.223.57.121:8090/barang/find-all',{
      headers: {
       'Authorization' : 'Bearer ' + this.state.token,
      },
      params : {
       offset:0,
       page : 2,
       limit:100,
       search : params 
      }
     })
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
 },
 
 
  },
  modules: {},
});
