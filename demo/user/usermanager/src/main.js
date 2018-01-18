import Vue from 'vue'
import App from './App'
//import VueRouter from 'vue-router'
//import Users from './components/Users'
//import Test from './components/Test'

//Vue.use(VueRouter);

Vue.config.productionTip = false;

//设置路由
/*const router = new VueRouter({
  mode:'history',
  base:'__dirname',//当前路径
  routes:[
    {path:"/",component:Users},
    //{path:"/test",component:Test},

  ]

});*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //router:router,
  render: h => h(App)
})
