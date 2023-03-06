import {reqAddressInfo,reqOrderInfo} from '@/api'

const state = {
    address:[],
    orderInfo:{}
}

const mutations = {
    GetUserAddress(state, address){
        state.address = address
    },
    GetOrderInfo(state, orderInfo){
        state.orderInfo = orderInfo
    }
}
const actions = {
    //获取用户地址信息
    async getUserAddress({ commit }) {
      let result = await reqAddressInfo();
      if (result.code == 200) {
        commit("GetUserAddress", result.data);
      }
    },
    async getOrderInfo({commit}){
       let result = await reqOrderInfo()
  
       if(result.code == 200){
        commit('GetOrderInfo',result.data)
        return 'ok'
       }else{

       }
    },
    
}

const getters = {

} 

export default{
    state, mutations, actions, getters
}