let Vaults = require('../models/vault')
let Keeps = require('../models/keep')
//WHEN YOU NAME A CUSTOM ROUTE IT CANNOT BE THE PLURAL NAME OF A MODEL(IE, KEEP MODEL SO NO KEEPS ROUTE,) AND CANNOT BE PLURAL NAME OF A MODEL WITH A FORWARD SLASH ID FOLLOWING
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
  getKeepsByVaultId: {
        path: '/vaults/:vaultId/keeps',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Return vault and associated keeps'
            Vaults.findById(req.params.vaultId)
            .then(vault => {
                Keeps.find({ vaultId: req.params.vaultId})
                .then(keeps => {
                    vault.keeps = keeps
                    res.send(handleResponse(action, vault.keeps))
                })
            }).catch(error => {
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