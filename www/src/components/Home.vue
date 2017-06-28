<template>
  <div class="Home">

    <div class="container">
      <div class="row A"><!--empty buffer--></div>
      <div class="row B">
        <div class="col-md-2"><!--buffer space--></div>
        <div class="col-md-3">
          <h2>
            {{user.name}}, here are your boxes...
          </h2>
        </div>
        <div class="col-md-4"><!--buffer space--></div>
        <div class="col-md-1"><router-link :to="'/Shelter'">Go to the shelter!</router-link></div>
        <div class="col-md-1"><button class="button logout" @click="logout(user)">logout</button></div>
        <div class="col-md-1"><!--buffer space--></div>
      </div>
      <div class="row C"><!--empty buffer--></div>
      <div class="row D">
        <div class="col-md-3" v-for="vault in vaults">
            <div class="well">
              <router-link :to="'/vault' + vault.id">
                {{vault.name}}
                {{vault.description}}
              </router-link>
            </div>
        </div>
        <div class="col-md-3">
          <form @submit.prevent="createVault">
                  <input type="text" v-model="name" required placeholder="name of new keep...">
                  <input type="text" v-model="description" required placeholder="description of new keep...">
                  <button @click="createVault">+</button>
          </form>
        </div>
      </div>
      <div class="row E"><!--empty buffer--></div>
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
      creatorId: this.$store.state.user._id
    }
  },
  mounted(){
    this.$store.dispatch('getMyVaults')
  },
  computed:{
    user(){
      return this.$store.state.user
    },
    vaults(){
    return this.$store.state.myVaults
  }
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
        keepIds: this.$route.params.id,
        creatorId: this.creatorId 
      })
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