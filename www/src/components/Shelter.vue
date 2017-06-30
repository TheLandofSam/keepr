<template><!--a publicKeeps space-->
  <div class="shelter">
    <div class="container">
      <div class="row A">
        <div class="col-md-1"></div>
        <div class="col-md-3">
          <img src="http://i44.photobucket.com/albums/f3/suhmantha/logo_zpslwie0kuo.jpg">
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-2">
          <router-link :to="'/Home'"><img src="http://i44.photobucket.com/albums/f3/suhmantha/catinboxcolor_zps9pw7a4pm.jpg"></router-link>
        </div>
        <div class="col-md-1">
          <img height="55" width="200" @click="logout(user)"src="http://i44.photobucket.com/albums/f3/suhmantha/Logout_zpswppo7usx.jpg"></button>
        </div>
        <div class="col-md-1"></div>
      </div>
      <div class="row B">
        <div class="col-md-3"></div>
        <div class="col-md-5 block">
          <h1>Hello {{user.name}},</h1>
          <br>
          <h3>Welcome to our Shelter! From this page you can browse for pictures, memes, or items for, of, and about cats. When you find something that makes you purrr, you can save them to your boxes. You can also add your strays to the Shelter for others to view and save to their boxes. (And, you can also find and post non-cat stuff here, but this behavior is strongly discouraged.)</h3>
        </div>
        <div class="col-md-1">
          
        </div>
        <div class="col-md-1">
          
        </div>
        <div class="col-md-2"><!--buffer space--></div>
      </div><!--ROW B CLOSES HERE-->
      <div class="row C">
        <div class="col-md-3"></div>
        <div class="col-md-4">
          <div class="well">
            <div class="row">
              <div class="col-md-8">
                  <h4>Add a new purrr!</h4>
                  <form @submit.prevent="createKeep">
                        <input type="text" v-model="title" required placeholder="title of new purrr...">
                        <input type="text" v-model="imgUrl" required placeholder="Url of purrr...">
                        <input type="text" v-model="body" required placeholder="description of new purrr...">
                        <button type="submit">+</button>
                  </form>
              </div>
              <div class="col-md-3">
                  <img src="http://i44.photobucket.com/albums/f3/suhmantha/cat5color_zpsj9e3omnk.png">
              </div>
              
            </div>
          </div>
        </div>
        <div class="col-md-5"></div>
      </div>
      <div class="row D">
        <div class="col-md-3" v-for="(keep, index) in keeps">
          <div class="card-columns">
              <img :src="keep.imgUrl">
              <h4>{{keep.title}}</h4>
              <h5>{{keep.body}}</h5>
             
              <button class="modal-default-button" @click="triggerModal(keep)"> Add to a box!</button>
              <modal v-if="openModal" @close="openModal = false">
                <transition name="modal" v-if="openModal">
                  <div class="modal-mask">
                    <div class="modal-wrapper">
                      <div class="modal-container">
                        <div class="modal-header">
                          <slot name="MyKeeps">
                            Add to my purrs...
                          </slot>
                        </div>
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-6">


                              <slot name="body">
                                <select v-model="selectedVault">
                                  <option v-for="vault in vaults" v-bind:value="vault._id">
                                      {{vault.name}}
                                  </option>
                                </select>
                                <button @click="saveKeep(keep, vault._id)">Send to your box</button>
                              </slot>
                            </div>
                            
                            <div class="col-md-5">
                              <img src="http://i44.photobucket.com/albums/f3/suhmantha/cat7%20copy_zps4v99oebj.png">
                            </div>
                            <div class="col-md-1"></div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <slot name="footer">
                            Close this modal --->
                            <button class="modal-default-button" @click="openModal=false">
                              Close
                            </button>
                          </slot>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </modal>
              

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
      vList: false,
      openModal: false,
      selectedVault: '',
      selectedKeep: '',
      title: '',
      imgUrl: '',
      body: '',
      creatorId: this.$store.state.user._id,
      description: '',
      name: '',

    }
    
  },
  mounted(){
    this.$store.dispatch('getKeeps')
    //this needs to run getkeeps from actions in store
    this.$store.dispatch('getMyVaults')
  },
  computed:{
    keeps(){
      return this.$store.state.keeps
    },
    vaults(){
      return this.$store.state.myVaults
    },
    user(){
      return this.$store.state.user
    }
  },
  methods: {
    triggerModal(keep){
      this.selectedKeep = keep;
      this.selectedVault = vault;
      this.openModal = true;

    }
    createKeep(){
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
    saveKeep(){
      selectedKeep.vaults.push(selectedVault)
      this.$store.dispatch('saveKeep', selectedKeep)
      selectedKeep = {},
      selectedVault = ''
    },
    openModal(keep){
      this.openModal = true
    },
    toggleFalse(){
      this.vList = false
    },
    toggleTrue(){
      this.vList = true
    },
    logout(user) {
      this.$store.dispatch('logout', this.user)
    }
  }
}

//myKeeps should know what vault they belong to. In this way, you can do a call for all keeps holding a certain vault's id number. so when someone chooses a keep and adds that keep it bring up a list of vaults to choose from. When you choose a vault, it sends that vault id to the keep so it knows where is belongs. 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-columns{  background-color: rgb(181, 157, 180);
  min-height: 50px;
  margin: 10px;
}
h1, h2 {
  font-weight: normal;
  /*color: #fe0096;*/
}

/*h3 {
  color: #fe0096;
}*/

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
  border-bottom: 2px;
  border-bottom-color: lightgray;
  /*i tried to float the image right and it fell out of the card. Meh.*/
}
a {
  color: #42b983;
}
.logout {
  
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(143, 10, 89, .1);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

</style>
