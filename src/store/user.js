import {reqCode,userRegister,reqUserLogin,reqUserInfo,  reqLogout} from '@/api'
import {setToken,getToken,removeToken} from '@/utils/token'

const state = {
    code:'',
    token: getToken(),
    userInfo:{},
}
const mutations= {
    getCode(state, code){
        state.code = code
    },
    UserLogin(state, token){
        state.token = token 
    },
    getUserInfo(state,userInfo){
        state.userInfo = userInfo
    },
    ClearUserInfo(state){
        state.token = '',
        state.userInfo = {},
        removeToken()
    }

}
const actions = {
    async getCode({commit},phone){
        let result = await reqCode(phone)
    
        if(result.code == 200){
            commit('getCode',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }

    },
    async userRegister({commit},user){
        let result = await userRegister(user)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error(result.message))
        }
    },
    async getUserLogin({commit}, data){
        let result = await reqUserLogin(data)
        if(result.code== 200){
            commit('UserLogin',result.data.token)
            setToken(result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error(result.message))
        }
    },
    async getUserInfo({commit}){
        let result = await reqUserInfo()
        if(result.code == 200){
            commit('getUserInfo',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async userLogout({commit}){
        let result = await reqLogout()
        if(result.code == 200){
            commit('ClearUserInfo')
            return 'ok'
        }else{
            return Promise.reject(new Error(result.message))
        }
    }

}
const getters = {
    
}

export default{
    state, mutations,actions,getters
 }