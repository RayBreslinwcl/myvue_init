<template>
  <div id="app">
    <img src="./assets/logo.png">

    <router-view/>

    <router-link to="/page1">Page1</router-link>
    <router-link to="/page2">Page2</router-link>

    <div>
      <router-link to="/user/xianyu">动态路由咸鱼</router-link>
      <router-link to="/user/mengxiang">动态路由梦想</router-link>

      <router-link to="/vcharts">vcharts</router-link>
    </div>

     <elementui></elementui>


  </div>
  <!-- //添加两个router-link标签 -->
 
</template>



<script>

import Elementui from './components/elementui.vue'

export default {
  name: 'App',
  components: {
    Elementui
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-row {
  margin-bottom: 200px;
  /* &:last-child {
    margin-bottom: 0;
  } */
}
.el-col {
  border-radius: 6px;
  
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>


