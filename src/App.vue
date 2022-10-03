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
  </div>

  <!-- //添加两个router-link标签 -->


</template>

<script>
export default {
  name: 'App'
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
</style>
