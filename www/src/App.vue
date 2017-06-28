<template>
  <div id="app wall">
    <img src="./assets/logo.jpg">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
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
  color: #2c3e50;
  margin-top: 30px;
  
  
}
body, html{
  height: 100%;
}

#wall{
  background-image: url ("http://i44.photobucket.com/albums/f3/suhmantha/catWallpaper_zps6hwlzmfz.jpg");
  height: 100%;
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
}
</style>
