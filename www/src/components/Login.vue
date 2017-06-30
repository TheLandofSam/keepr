<template>
  <div class="login">
    <div class="container">
      <div class="row A">
        <div class="col-md-1"></div>
        <div class="col-md-3">
          
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
            <input type="email" class="form-control" v-model="user.email" required placeholder="email">
            <input type="password" class="form-control" v-model="user.password" required placeholder="password">
            <button class="btn btn-default" type="submit">submit</button>
          </form>
        </div>
        <div class="col-md-3"></div>
      </div><!--row C close-->
      <div class="row D">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <h4>If you are thinking..."I love cats!"... then <router-link :to="'/register'">be a Keepurrr!</router-link></h4>
          <h4>If you are thinking..."I want cats!"... then <router-link :to="'/register'">be a Keepurrr!</router-link></h4>
          <h4>If you are thinking..."I must have cats!"... then <router-link :to="'/register'">be a Keepurrr!</router-link></h4>
          <h4>If you are thinking..."...stupid cats!"... then <router-link :to="'/register'">be a Keepurrr!</router-link> because you need some cats.</h4>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-4"></div>
        <div class="col-md-5">
          <img src="http://i44.photobucket.com/albums/f3/suhmantha/cat6colored_zpsgpw4nb7k.jpg">
        </div>
      </div>
    </div>
  </div>
</template>


<script>

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
input {
  max-width: 300px;
}
img {
  max-height: 200px;
}
</style>