import {reqGetSearchInfo} from '@/api'


const state = {
    searchList : {}
};
const mutations ={
    getsearchList(state,searchList){
        state.searchList = searchList
    }
};
const actions = {
    async getsearchList({commit},params={}){
        let result = await reqGetSearchInfo(params)
        if(result.code == 200){
            commit('getsearchList', result.data)
        }
    }
};
const getters = {
    goodsList(state){
       return state.searchList.goodsList||[]
    },
    attrsList(state){
        return state.searchList.attrsList
    },
    trademarkList(state){
        return state.searchList.trademarkList
    }
};
export default {
    state,mutations,actions,getters
}