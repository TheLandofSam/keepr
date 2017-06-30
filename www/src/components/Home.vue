<template>
  <div class="Home">

    <div class="container">
      <div class="row A">
        <div class="col-md-1"></div>
        <div class="col-md-3">
          <img src="http://i44.photobucket.com/albums/f3/suhmantha/logo_zpslwie0kuo.jpg">
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-2">
          <router-link :to="'/Shelter'"><img height="100" width="100" src="http://i44.photobucket.com/albums/f3/suhmantha/sleepcat_zpseogjzcdq.jpg"></router-link>
        </div>
        <div class="col-md-1">
          <img height="55" width="200" @click="logout(user)"src="http://i44.photobucket.com/albums/f3/suhmantha/Logout_zpswppo7usx.jpg">
        </div>
        <div class="col-md-1"></div>
      </div>
      <div class="row B">
        <div class="col-md-2"><!--buffer space--></div>
        <div class="col-md-3">
          <h2>
            {{user.name}}, here are your boxes...
          </h2>
        </div>
        <div class="col-md-4"><!--buffer space--></div>
        <div class="col-md-1"></div>
        <div class="col-md-1"></div>
        <div class="col-md-1"><!--buffer space--></div>
      </div>
      <div class="row C"><!--empty buffer--></div>
      <div class="row D">
        <div class="col-md-3">
          <div class="well">
            <div class="row">
              <div class="col-md-7">
                <h4>Add a new box!</h4>
                <form @submit.prevent="createVault">
                        <input type="text" v-model="name" required placeholder="name of new box...">
                        <input type="text" v-model="description" required placeholder="description of new box...">
                        <button type="submit">+</button>
                </form>
              </div>
              <div class="col-md-5">
                <img height="150" width="80" src="http://i44.photobucket.com/albums/f3/suhmantha/cat2_zpsg7nxmvb2.png">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3" v-for="vault in vaults">
            <div class="well">
              <router-link :to="'/Box/' + vault._id">
                <h4>{{vault.name}}</h4>
              </router-link>
              <h5>{{vault.description}}</h5>
            </div>
        </div>
      </div>
      <div class="row E">
        <div class="col-md-2"><!--buffer space--></div>
        <div class="col-md-3">
          <h2>
            {{user.name}}, here are your purrrs...
          </h2>
        </div>
        <div class="col-md-7"><!--buffer space--></div>
      </div>
      <!--<div class="row F">
        <div class="col-md-3" v-for="Keep in Keeps">
          <div class="card-columns">
            <img :src="keep.imgUrl">
            <h4>{{keep.title}}</h4>
            <h5>{{keep.body}}</h5>
          </div>
        </div>
        <div class="col-md-3">
          <form @submit.prevent="createMyKeep">
                <input type="text" v-model="title" required placeholder="title of new keep...">
                <input type="text" v-model="imgUrl" required placeholder="Url of keep...">
                <input type="text" v-model="body" required placeholder="description of new keep...">
                <button type="submit">+</button>
          </form>
        </div>
      </div>-->
      <div class="row G"><!--empty buffer--></div>
    </div>

  </div>
</template>


<script>
import Shelter from './Shelter'
export default {
  name: 'Home',
  data(){
    return {
      name: '',
      description: '',
      creatorId: this.$store.state.user._id,
      body: '',
      imgUrl: '',
      title: '',
      myKeeps: []
    }
  },
  mounted(){
    this.$store.dispatch('getMyVaults')
    this.$store.dispatch('getKeeps')
  },
  computed:{
    user(){
      return this.$store.state.user
    },
    vaults(){
    return this.$store.state.myVaults
    },
    keeps(){
    return this.$store.state.keeps
    },
  },
  methods:{
    logout() {
      this.$store.dispatch('logout', this.user)
    },
    createVault(){
      this.$store.dispatch('createVault', {
        name: this.name,
        description: this.description,
        vaultId: this.$route.params.id,
        creatorId: this.creatorId 
      })
      this.$store.dispatch('getMyVaults')
      name = '',
      description = ''
    },
    createMyKeep(){
      this.$store.dispatch('createKeep', {
        title: this.title,
        imgUrl: this.imgUrl,
        body: this.body,
        creatorId: this.creatorId 
      })
      this.$store.dispatch('getKeeps')//mounted will only run on the compnent being rendered, will only get keeps currently in database so need this line to run whole get again.
      title = '',
      imgurl = '',
      body = ''
    },
    removeVault(vault){
      this.$store.dispatch('removeVault', vault)
    },
    removeKeep(){
      this.$store.dispatch('deleteKeep', keep)
    
    },
    
  },
  
  components:{}
}

</script>


<style scoped>

</style>