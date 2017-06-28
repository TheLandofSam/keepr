<template><!--a publicKeeps space-->
  <div class="shelter">
    <div class="container-fluid">
      <div class="row A"><!--empty top buffer--></div>
      <div class="row B">
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <h1>Keepurrrr</h1>
          <br>
          <h4>Hello {{user.name}}, welcome to our Shelter! From this page you can browse for pictures, memes, or items for, of, and about cats, then you can save them to your boxes. You can also add your strays to the Shelter for others to view and save to their boxes. (And, you can also find and post non-cat stuff here, but the kitties will be a bit confused by this behavior...)</h4>
        </div>
        <div class="col-md-1"><!--buffer space--></div>
        <div class="col-md-1">
          <router-link :to="'/Home'">to your boxes!</router-link>
        </div>
        <div class="col-md-1">
          <button class="button logout" @click="logout(user)">logout</button>
        </div>
        <div class="col-md-2"><!--buffer space--></div>
      </div><!--ROW B CLOSES HERE-->
      <div class="row C"></div>
      <div class="row D">
        <div class="col-md-3 card">
          <div v-for="keep in keeps" :key="keep.keepIds">
            {{keep.title}}
            {{keep.imgUrl}}
          </div>
        </div>
      </div><!--ROW D CLOSES HERE-->
      <div class="row E"><!--empty bottom buffer--></div>

    
    <ul><!--v for loop for everything in keeps to make keeps dispaly on this-->
      
    </ul>
    <hr>


    </div>
  </div>
</template>

<script>
export default {
  name: 'Shelter',
  data () {
    return {

    }
  },
  mounted(){
    this.$store.dispatch('getKeeps')
    //this needs to run getkeeps from actions in store
  },
  computed:{
    keeps(){
    return this.$store.state.keeps
    },
    user(){
      return this.$store.state.user
    }
  },
  methods: {
    // createKeep(){
    //   this.$store.dispatch('createKeep', {
    //     title: this.title,
    //     imgUrl: this.imgUrl,
    //     vaults: this.vault,
    //     author: this.user.name,
    //   })
    //   keepCount += 1,
    //   viewCount += 1,
    //   shareCount += 1
    // },
    logout(user) {
      this.$store.dispatch('logout', this.user)
    }
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
