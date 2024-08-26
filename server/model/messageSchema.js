const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  userName:{
    type: String,
    required: true
  },
  body:{
    type: String,
    required: true
  },
  time:{
    type: String,
    required: true
  },
});

module.exports = mongoose.model('message', messageSchema);