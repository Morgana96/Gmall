import axios from "axios";
import nprogress from "nprogress";
import 'nprogress/nprogress.css';

let requests = axios.create({
    baseURL:"/mock",
    timeout:5000,
})

requests.interceptors.request.use((config)=>{
    return config;
});

requests.interceptors.response.use((res)=>{
    return res.data;
},
(err) => {
    alert("failed");
  }
)

export default requests