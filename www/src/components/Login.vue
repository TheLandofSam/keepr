<template>
  <div class="login">
    <div class="container-fluid">
      <div class="row A">
        <div class="col-md-1"></div>
        <div class="col-md-3">
          <h2>Keepurrr</h2>
        </div>
        <div class="col-md-8"></div><!--there will probably further divs here-->
      </div><!--row A close-->
      <div class="row"><!--empty buffer--></div>
      <div class="row B">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <h3>login</h3>
        </div>
        <div class="col-md-4"></div>
      </div><!--row B close-->
      <div class="row C">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <form @submit.prevent="login">
            <input type="email" v-model="user.email" required placeholder="email">
            <input type="password" v-model="user.password" require placeholder="password">
            <button type="submit">submit</button>
          </form>
        </div>
        <div class="col-md-3"></div>
      </div><!--row C close-->
      <div class="row D">
        <h4>If you are thinking..."cats!"... then <router-link :to="'/register'">be a Keepurrr!</router-link></h4>
      </div>
      <div class="row"><!--empty bottom buffer--></div>
    </div>
  </div>
</template>


<script>
import Login from './Login'
export default {
  name: 'login',
  data(){
    return{
      user: {}
    }
  },
  computed:{},
  methods:{
    login(){
    this.$store.dispatch('login', this.user)
    }
  },
  components:{}
}
</script>


<style scoped>

</style>