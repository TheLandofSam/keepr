<template>
  <div class="register">
    <div class="container-fluid">
      <div class="row A">
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <h2>Join Keepurrr (we have sooo many cats)!</h2>
        </div>
        <div class="col-md-4"></div>
      </div><!--row A close-->
      <div class="row B">
        <form @submit.prevent="register">
          <input type="text" v-model="user.name" required placeholder="name">
          <input type="email" v-model="user.email" required placeholder="email">
          <input type="password" v-model="user.password" require placeholder="set password">
          <button type="submit">purrr</button>
        </form>
      </div><!--row B close-->
      <div class="row C"><!--empty bottom buffer--></div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'register',
  data(){
    return{
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

</style>
