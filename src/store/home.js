import{reqCategoryList, reqGetBannerList, reqFloorList} from '@/api'


const state ={
    categoryList:[],
    bannerList:[],
    floorList:[],
};
const mutations ={
    reqCategoryList(state,categoryList){
        state.categoryList = categoryList
    },
    reqGetBannerList(state,bannerList){
        state.bannerList = bannerList
    },
    reqFloorList(state,floorList){
        state.floorList = floorList
    }
};
const actions = {
    async categoryList({commit}){
        let result = await reqCategoryList()
            if(result.code==200){
                commit('reqCategoryList',result.data)
            }
    },
    async getBannerList({commit}){
       let result  = await reqGetBannerList()
        if(result.code ==200){
            commit('reqGetBannerList', result.data)
        }
    },
    //get floor
    async getFloorList({commit}){
       let result =  await reqFloorList()
       if(result.code == 200){
            commit('reqFloorList',result.data)
       }
    }

};
const getters = {

};
export default {
    state,mutations,actions,getters
}