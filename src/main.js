import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/pagination'
import { Button, MessageBox} from 'element-ui';

Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination);
Vue.component(Button.name, Button);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import store from './store';

Vue.config.productionTip = false

import '@/mock/mockServe'
import * as API from '@/api'
import VueLazyload from 'vue-lazyload'
import myPlugins from './plugin/myPlugin.js'

Vue.use(myPlugins)

Vue.use(VueLazyload)
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API
  },
  router,
  store,  
}).$mount('#app')
