//const Mongoose = require('mongoose');

const Joi = require("joi");

const User = require("../../database/models/User");

// Schema
const PersonModel = User.Person;
const ContactModel = User.Contact;

// Exporting user api routes
exports.register = (server, options) => {
  //route 1
  server.route({
    method: "POST",
    path: "/person",
    options: {
      auth: false,
      tags: ["api"],
      validate: {
        payload: {
          firstname: Joi.string()
            .min(3)
            .required(),
          lastname: Joi.string().required(),
          username: Joi.string().required(),
          password: Joi.string().required(),
          role: Joi.string().required()
        },
        failAction: (request, h, error) => {
          return error.isJoi
            ? h.response(error.details[0]).takeover()
            : h.response(error).takeover();
        }
      }
    },
    handler: async (request, h) => {
      try {
        var person = new PersonModel(request.payload);
        var result = await person.save();
        // if(person.firstname === 'darryl') {
        // var result = await person.save();}else{
        //   result = "not darryl";
        // } can perform certain logic here
        return h.response(result);
      } catch (error) {
        return h.response(error).code(500);
      }
    }
  });

  //route 2
  server.route({
    method: "GET",
    path: "/people",
    options: {
      auth: false,
      cors: true
    },
    handler: async (request, h) => {
      try {
        var people = await PersonModel.find().exec();
        //MongoDB Queries
        //Where statement
        // var darryl = await PersonModel.find().where('firstname',['Chee Hao','darryl']).exec();
        //Count
        //var people = await PersonModel.find().count().exec();
        //AND
        // var darryl = await PersonModel.find()
        //.and([{'firstname': ['Chee Hao', 'darryl']}, {'lastname': 'Boss'}])
        //.exec();
        //Get part of the element
        //var people = await PersonModel.find({},'firstname').exec();

        return h.response(people);
      } catch (error) {
        return h.response(error).code(500);
      }
    }
  });

  //route 3
  server.route({
    method: "POST",
    path: "/contact",
    options: {
      auth: false,
      validate: {
        payload: {
          userid: Joi.required(),
          contact: Joi.number()
            .integer()
            .required()
        },
        failAction: (request, h, error) => {
          return error.isJoi
            ? h.response(error.details[0]).takeover()
            : h.response(error).takeover();
        }
      }
    },
    handler: async (request, h) => {
      try {
        var contact = new ContactModel(request.payload);
        var result = await contact.save();
        return h.response(result);
      } catch (error) {
        return h.response(error).code(500);
      }
    }
  });
};

exports.pkg = {
  name: "userapis"
};
