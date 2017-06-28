<template><!--a publicKeeps space-->
  <div class="shelter">
    <div class="container-fluid">
      <div class="row A"><!--empty top buffer--></div>
      <div class="row B">
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <h1>Keepurrrr</h1>
          <br>
          <h4>Hello {{user.name}}, welcome to our Shelter! From this page you can browse for pictures, memes, or items for, of, and about cats. When you find something that makes you purrr, you can save them to your boxes. You can also add your strays to the Shelter for others to view and save to their boxes. (And, you can also find and post non-cat stuff here, but this behavior is strongly discouraged.)</h4>
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
      <div class="row C">
        <div class="col-md-2"></div>
        <div class="col-md-6 card">
          <form @submit.prevent="createKeep">
                <input type="text" v-model="title" required placeholder="title of new keep...">
                <input type="text" v-model="imgUrl" required placeholder="Url of keep...">
                <input type="text" v-model="body" required placeholder="description of new keep...">
                <button @click="createKeep">+</button>
          </form>
        </div>
        <div class="col-md-4"></div>
      </div>
      <div class="row D">
        <div class="col-md-3" v-for="keep in keeps">
          <div class="card">
            <router-link :to="'/keep' + keep.id">
              {{keep.title}}
              {{keep.body}}
              <img :src="keep.imgUrl">
            </router-link>
          </div>

        </div>
      </div><!--ROW D CLOSES HERE-->
      <div class="row E"><!--empty bottom buffer--></div>

    </div>
  </div>
</template>

<script>
import Box from './Box'
export default {
  name: 'Shelter',
  data () {
    return {
      title: '',
      imgUrl: '',
      body: '',
      vault: '',
      creatorId: this.$store.state.user._id
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
    createKeep(){
      this.$store.dispatch('createKeep', {
        title: this.title,
        imgUrl: this.imgUrl,
        body: this.body,
        vault: this.vault._id,
        creatorId: this.creatorId 
      })
    },
    logout(user) {
      this.$store.dispatch('logout', this.user)
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  background-color: lightslategray;
  min-height: 50px;
  margin: 10px;
}
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
img{
  max-height: 120px;
}
a {
  color: #42b983;
}
</style>
