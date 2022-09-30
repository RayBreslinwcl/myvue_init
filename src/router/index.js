import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

//引用page1页面
import page1  from '../components/page1.vue';
//引用page2页面
import page2  from '../components/page2.vue';

import user  from '../components/user.vue';

//定义routes路由的集合，数组类型
const routes=[
  //单个路由均为对象类型，path代表的是路径，component代表组件
  {path:'/page1',component:page1},
  {path:'/page2',component:page2},
   //使用冒号标记，当匹配到的时候，参数值会被设置到this.$route.params中
  {path:"/user/:name",component:user}
  
]

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ]
  routes: routes
})
