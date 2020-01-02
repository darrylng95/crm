const Mongoose = require('mongoose');

module.exports = {
  Person: Mongoose.model('person', {
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    role: String
  }),
  Contact: Mongoose.model('contact', {
    userid: String,
    contact: String
  })
};
