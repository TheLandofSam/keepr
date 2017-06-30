<template>
  <div class="register">
    <div class="container-fluid">
      <div class="row A">
        <div class="col-md-3"></div>
        <div class="col-md-4">
          <h2>Join Keepurrr (we have sooo many cats)!</h2>
        </div>
        <div class="col-md-5"></div>
      </div><!--row A close-->
      <div class="row B">
        <div class="col-md-3"></div>
        <div class="col-md-6">
        <form @submit.prevent="register">
          <input type="text" class="form-control" v-model="user.name" required placeholder="name">
          <input type="email" class="form-control" v-model="user.email" required placeholder="email">
          <input type="password" class="form-control" v-model="user.password" require placeholder="set password">
          <button class="btn btn-default" type="submit">purrr</button>
        </form>
        </div>
        <div class="col-md-2"></div>
      </div><!--row B close-->
      <div class="row C">
        <div class="col-md-8"></div>
        <div class="col-md-2">
          <router-link :to="'/'">back to login!</router-link>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row D">
        <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-4">
          <img src="http://i44.photobucket.com/albums/f3/suhmantha/footercats_zpsagxt7a9e.jpg">
        </div>
        <div class="col-md-5"></div>
      </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'register',
  data() {
    return {
      user: {}
    }
  },
  computed:{},
  methods:{
    register(){
      this.$store.dispatch('register', this.user)
    }
  },
  components:{}
}
</script>


<style scoped>
input {
  max-width: 600px;
}

</style>

