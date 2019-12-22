const Mongoose = require('mongoose');

module.exports = {
  Person: Mongoose.model('person', {
    firstname: String,
    lastname: String,
    role: String,
    profilepic: String
  }),
  Contact: Mongoose.model('contact', {
    userid: String,
    contact: String
  })
};
