<template>
  <div id="app">
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
  font-family: 'Boogaloo', cursive;
  /*font-family: 'Lakki Reddy', cursive;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
  
  
}
body, html{
  background-color: #ccc1ca; 
  /*height: 100vh;
  background: url("http://i44.photobucket.com/albums/f3/suhmantha/catWallpaper_zps6hwlzmfz.jpg");
  background-position: center;
  background-repeat: repeat;
  background-size: cover;*/
  
}
</style>
