//const Mongoose = require('mongoose');

const Joi = require('joi');

const fs = require('fs');

const mkdirp = require('mkdirp');

const User = require('../../database/models/User');

// Schema
const PersonModel = User.Person;
const ContactModel = User.Contact;

//upload function
const handleFileUpload = (file, params) => {
  return new Promise((resolve, reject) => {
    const filename = file.hapi.filename;
    const data = file._data;
    var folder = 'src/api/user/upload/' + params.id + '/' + params.for;
    var filepath = folder + '/' + filename;
    mkdirp(folder, function(err) {
      if (err) console.log(err);
      else console.log('Created:', folder);
    });
    setTimeout(() => {
      fs.writeFile(folder + '/' + filename, data, err => {
        if (err) {
          console.log('error:', err);
          reject(err);
        }
        resolve({
          message: 'Upload Successfully!',
          status: '200',
          filepath: filepath
        });
      });
    }, 1000);
  });
};

// Exporting user api routes
exports.register = (server, options) => {
  //route 1
  server.route({
    method: 'POST',
    path: '/person',
    options: {
      tags: ['api'],
      validate: {
        payload: {
          firstname: Joi.string()
            .min(3)
            .required(),
          lastname: Joi.string().required(),
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
    method: 'GET',
    path: '/people',
    options: {
      tags: ['api'],
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
    method: 'POST',
    path: '/contact',
    options: {
      tags: ['api'],
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

  server.route({
    method: 'POST',
    path: '/upload/{id}/{for}',
    options: {
      tags: ['api'],
      payload: {
        output: 'stream'
      }
    },
    handler: async (request, h) => {
      const { payload } = request;
      const response = await handleFileUpload(payload.file, request.params);
      console.log(response.status);
      if (response.status === '200') {
        console.log('success', response.filepath);
        var filepath = response.filepath;
        try {
          await PersonModel.findByIdAndUpdate(request.params.id, {
            profilepic: filepath
          });
        } catch (error) {
          console.log(error);
        }
      }
      return response;
    }
  });

  server.route({
    method: 'GET',
    path: '/upload/{file*}',
    handler: {
      directory: {
        path: 'src/api/user/upload/'
      }
    }
  });
};

exports.pkg = {
  name: 'userapis'
};
