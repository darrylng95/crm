const Mongoose = require('mongoose');

const Joi = require('joi');

const User = require('../../database/models/User');
const PersonModel = User.Person;
const ContactModel = User.Contact;
exports.register = (server, options) => {
  server.route({
    method: 'POST',
    path: '/person',
    options: {
      validate: {
        payload: {
          firstname: Joi.string()
            .min(3)
            .required(),
          lastname: Joi.string().required()
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
        return h.response(result);
      } catch (error) {
        return h.response(error).code(500);
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/people',
    handler: async (request, h) => {
      try {
        var people = await PersonModel.find().exec();
        return h.response(people);
      } catch (error) {
        return h.response(error).code(500);
      }
    }
  });

  server.route({
    method: 'POST',
    path: '/contact',
    options: {
      validate: {
        payload: {
          userid: Joi.required(),
          contact: Joi.number().integer().required()
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
    name: 'userapis'
};

