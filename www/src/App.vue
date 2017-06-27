<template>
  <div id="app">
    <img src="./assets/logo.jpg">
    <router-view></router-view>
  </div>
</template>

<script>
import Register from './components/register'
import Login from './components/login'
import Error from '.components/error'
export default {
  name: 'app',
  components:{
    Error,
    Register,
    Login
  },
  mounted(){
    this.$store.dispatch('getAuth')
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
</style>
