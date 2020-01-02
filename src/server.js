//server starting point
'use strict';

const Glue = require('glue');
const manifest = require('./manifest');
const Mongoose = require('mongoose');
const keys = require('./config/default');
//require('./database/models/User');

Mongoose.connect(keys.mongoURI, { useNewUrlParser: true,useUnifiedTopology: true });

Mongoose.connection.on('error', err => {
  console.error(`Mongoose connection error: ${err}`);
  process.exit(1);
});

const options = {
  relativeTo: __dirname
};

module.exports.compose = () => {
  return Glue.compose(manifest, options);
};

const startServer = async function() {
  try {
    const server = await module.exports.compose();
    await server.start(); 
    console.log(`server started on port ${manifest.server.port}!`);
    server.log(['success'], {
      message: `server started on port ${manifest.server.port}!`
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
