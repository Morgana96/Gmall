import {reqGoodsinfo,reqAddCart} from '@/api'
import {getUUID} from '@/utils/uuid_token'
const state = {
    GoodInfo:{},
    uuid_token:getUUID()
}
const mutations = {
    GetGoodInfo(state, GoodInfo){
        state.GoodInfo = GoodInfo
    }
}
const actions = {
    async getGoodInfo({ commit }, skuid){
        let result = await reqGoodsinfo (skuid);
        if (result.code == 200){
            commit("GetGoodInfo", result.data);
        }
    },
    async AddCart({commit},{skuId, skuNum}){
        let result = await reqAddCart(skuId, skuNum)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faild'))
        }
    }
}
const getters = {
    categoryView(state){
        return state.GoodInfo.categoryView||{};
    },
    skuInfo(state){
        return state.GoodInfo.skuInfo||{};
    },
    spuSaleAttrList(state){
        return state.GoodInfo.spuSaleAttrList||{}
    }
}
export default{
    state, actions, mutations, getters
}