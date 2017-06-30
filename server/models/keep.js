//novaultid
//method addkeep to vault here you will increment the keepvalue for each keep
import { models } from '../config/constants'
let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let bcrypt = require('bcryptjs')
const SALT_FACTOR = 10

let schema = new Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true},
  body:{type: String},
  vaults: [{type: ObjectId, ref: models.vault.name}],
  created: { type: Number, required: true, default: Date.now() },
  creatorId: { type: ObjectId, ref: models.user.name, required: true},
  keepCount: {type: Number, default: 0},
  shareCount:{type: Number, default: 0},
  viewCount: {type: Number, default: 0},
  author: {type: String},//you might need to pass in the user model here...not sure...
  private: {type: Boolean, default: false}//this useablity may not get hooked up in the end...

});

module.exports = mongoose.model(models.keep.name, schema);
