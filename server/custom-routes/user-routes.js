let Vaults = require('../models/vault')

export default {
  userVaults: {//get vaults by userId
    path: '/userVaults',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Vaults'
      Vaults.find({creatorId: req.session.uid})
        .then(vaults => {
          res.send(handleResponse(action, vaults))
        })
    }
  },

  getUserKeeps: {
    path: '/userkeeps',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Return User Keeps'
      Keeps.find({userId: req.session.uid})//would this be user Name?
      .then(keeps => {
        return next(handleResponse(action, null, error))
      })
    }
  },

  getKeeps: {
    path: '/keeps',
    reqType: 'get',
    method(req, res, next){
      let actions = "Find Keeps"
      Keeps.find()
        .then(keeps => {
          var publicKeeps = []
          for (var i = 0; i < keeps.length; i++) {
            var keep = keeps[i]
            if (keep.private == false) {
              publicKeeps.push(keep)
            }
          }
          publicKeeps.push({ name: "keep"})
          res.send(handleResponse(action, publicKeeps))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }
}


function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }