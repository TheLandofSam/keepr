let Vaults = require('../models/vault')
let Keeps = require('../models/keep')

export default {
  getMyVaults: {
    path: '/myVaults',
    reqType: 'get',
    method(req, res, next){
      let action = 'find user vaults'
      Vaults.find({creatorId: req.session.uid})
        .then(vaults => {
          res.send(handleResponse(action, vaults))
        })
        .catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },

  getMyKeeps: {
    path: '/myKeeps',
    reqType: 'get',
    method(req, res, next) {
      let action = 'return vault with user keeps'
      Vaults.findById(req.params.vaultId)
        .then(vault => {
          Keeps.find({vaults: req.params.vaultId})
            .then(keeps => {
              vault.keeps = keeps
              res.send(handleResponse(action, vault.keeps))
            })
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },

  getKeeps: {
    path: '/keeps',
    reqType: 'get',
    method(req, res, next){
      let action = "find keeps"
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