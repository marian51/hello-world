import Vue from 'vue'
import App from './App.vue'
import underscore from 'vue-underscore'



Vue.config.productionTip = false
Vue.use(underscore);
import "bootstrap/dist/css/bootstrap.min.css";
//import page from "./components/Page.vue"



new Vue({
  render: h => h(App),
  
}).$mount('#app')

