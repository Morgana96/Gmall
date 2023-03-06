import axios from "axios";
import nprogress from "nprogress";
import 'nprogress/nprogress.css';
import store from '@/store'

console.log(nprogress);
const requests = axios.create({
    baseURL:'/api',
    timeout:5000
})

requests.interceptors.request.use((config)=>{
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token
    }
    //give token to the serve
    if(store.state.user.token){
        config.headers.token = store.state.user.token
    }
    return config;
})

requests.interceptors.response.use((res)=>{
    return res.data;
},
(err) => {
    alert("failed");
  }
)
export default requests