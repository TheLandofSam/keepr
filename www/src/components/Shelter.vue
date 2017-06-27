<template><!--a publicKeeps space-->
  <div class="shelter">
    <h1>Keepurrrr</h1>
    <p>Get Started</p>
    <ul><!--v for loop for everything in keeps to make keeps dispaly on this-->
      <li><router-link to="login">Login</router-link></li>
      <li><router-link to="register">Register</router-link></li>
    </ul>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  },
  mounted(){
    //this needs to run getkeeps from actions in store
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
