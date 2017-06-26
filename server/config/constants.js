const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  },
  vault:{
    name: 'Vault',
    endpoint: 'vaults',
    useCustomRoutes: false //if true, tells app to go into the custom routes dir and use the custom route
  },
  keep:{
    name: 'Keep',
    endpoint: 'keeps',
    useCustomRoutes: false,
  }
}


export  {
  actions,
  models
}