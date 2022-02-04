const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let formSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  message: {
    type: String
  }
}, {
    collection: 'forminfo'
  })

module.exports = mongoose.model('form', formSchema)