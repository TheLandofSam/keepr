import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
  user: {},
  myVaults: [{}],
  myKeeps: [{}],
  //Dummy Data
  keeps: [ /*{
    title: 'Learn to Draw the Meow Way',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful Meow sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Learn to Draw Cats',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/c7/80/e3/c780e34c14258f4087df410f03d76e83.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatisconsectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful Cat sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Learn to Draw Kittens',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful Kitten sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }*/],
  error: {}
}

let handleError = (err) => {
  state.error = err
}

export default new Vuex.Store ({
  // ALL DATA LIVES IN THE STATE
  state,
  mutations: {//there only job is to modify the state object, they are a middleman
    setKeeps(state, keeps) {
      state.keeps = keeps
      // keeps.forEach(keep=> {//this allowed both to display but duplicated things. So, I went back to seeing only my created keeps without the hard coded keeps
      // state.keeps.push(keep)
    //state.keeps = keeps//this is overwriting the hardcoded keeps with my postman keep
    },
    setMyVaults(state, myVaults) {
      state.myVaults = myVaults
    },
    setMyKeeps(state, myKeeps) {
      state.myKeeps = myKeeps
    },
    user(state, user) {
      state.user = user || {}
    },
    setNewKeeps(state, keep){
      state.keeps = keeps
    }
  },
  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  actions: {
    getKeeps({commit, dispatch}) {
      api('/keeps')
        .then(res => {
          commit('setKeeps', res.data.data)
        })
        .catch(handleError)
    },
    getMyVaults({commit, dispatch}) {
      api('/myVaults')//this should be vaults by user id//****fix path in server!***
        .then(res => {
          commit('setMyVaults', res.data.data)
        })
        .catch(handleError)
    },
    getMyKeeps({commit, dispatch}) {
      api('/myKeeps')//this should be keeps by vault id
        .then(res=> {
          commit('setMyKeeps', res.data.data)
        })
    },
    createKeep({ commit, dispatch }, keep) {
      api.post('/keeps', keep)
        .then(res => {
          commit('setNewKeeps', res.data.data)
          .then(res => {
            dispatch('getKeeps')///or myKeeps???
          .then(res => {
            commit('setKeeps', res.data.data)
          })
        })
         
        })
        .catch(handleError)
    },
    createVault({ commit, dispatch }, vault) {
      api.post('/vaults', vault)
        .then(res => {
          dispatch('getMyVaults')
        })
        .catch(handleError)
    },
    removeKeep({ commit, dispatch}, keep) {
      api.delete('/myKeeps', keep)
        .then(res => {
          dispatch('getMyKeeps')
        })
        .catch(handleError)
    },
    saveKeep({commit, dispatch}, keep, vaultId) {
      api.post('/vaults'+ vault._id, keep)
        .then(res=> {
          dispatch('getKeepsByVaultId')
        })
        .catch(handleError)
    },//IM NOT SURE ABOUT THIS!!!


    getAuth({commit, dispatch}) {
      auth('authenticate')
        .then(res => {
          commit('user', res.data.data)// state.user = res.data.data || {}///??
          console.log(res)
          if(res.data.data) {
          router.push('/Shelter')
          }else{
            router.push('/')
          }
        })
        .catch(err => {
          router.push('/')
        })
    },
    login({commit, dispatch}, user) {
      auth.post('login', user)
        .then(res => {
          console.log(res)
          commit('user', res.data.data)// state.user = res.data.data || {}///??
          router.push('/Shelter')//or is this /keeps?
        })
        .catch(handleError)
      //needs to authenticate whether this person is legit and then if not reroute to register, 
      // or invalid username or password
    },
    register({commit, dispatch}, user) {
      auth.post('register', user)
        .then(res => {
          console.log(res)
          if (res.data.error) {
            return handleError(res.data.error)
          }
          commit('user', res.data.data)// state.user = res.data.data || {}///?
          router.push('/Shelter')
        })
        .catch(handleError)
    },
    clearError() {
      state.error = {}
    },
    logout({commit, dispatch}, user) {
      auth.delete('logout', user)
        .then(res => {
          router.push('/')
        }).catch(handleError)
    },
    
  }

})

