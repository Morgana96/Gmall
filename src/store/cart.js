import { reqCartList, reqDelete, reqchangechecked } from "@/api"

const state = {
    cartList : []
}
const mutations={
    getCartList(state,cartList){
        state.cartList = cartList
    }

}
const actions = {
    async getCartList({commit}){
        let result = await reqCartList()
        if(result.code == 200){
            commit('getCartList',result.data) 
        }
    },
    async deleteCart({commit},skuId){
        let result = await reqDelete(skuId)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    async changechecked({ commit }, { skuId, isChecked }) {
        let result = await reqchangechecked(skuId, isChecked);
        console.log(result);
        if (result.code == 200) {
          return "ok";
        } else {
          return Promise.reject(new Error(result.message));
        }
      },
}
const getters={
    cartList(state){
        return state.cartList[0]||{}
    },
    // cartInfoList(state){
    //     return state.cartList[0].cartInfoList||[]
    // }
}

export default{
   state, mutations,actions,getters
}