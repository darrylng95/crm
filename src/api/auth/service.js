const users = {
  john: {
    username: "john",
    password: "changeme",
    name: "John Doe",
    id: "4321"
  },
  jane: {
    username: "jane",
    password: "changeme",
    name: "Jane Doe",
    id: "1234"
  }
};

const User = require("../../database/models/User");

const PersonModel = User.Person;

exports.validateLogin = async (request, username, password, h) => {
  const user = await PersonModel.findOne({ username: username }, function(
    err,
    person
  ) {
    if (err) {
      return null;
    } else {
      return person;
    }
  });

  if (!user) {
    return { isValid: false, credentials: null };
  }

  const isValid = password === user.password;
  const credentials = {
    id: user.id,
    username: user.username,
    firstname: user.firstname,
    lastname: user.lastname,
    role: user.role
  };

  return { isValid, credentials };
};

exports.validateToken = async function(decoded, request, h) {
  console.log(" - - - - - - - decoded token:");
  console.log(decoded);
  console.log(" - - - - - - - request info:");
  console.log(request.info);
  console.log(" - - - - - - - user agent:");
  console.log(request.headers["user-agent"]);

  const user = await PersonModel.findOne({ username: decoded }, function(
    err,
    person
  ) {
    if (err) {
      return null;
    } else {
      return person;
    }
  });

  if (!user) {
    return { isValid: false, credentials: null };
  }

  const credentials = {
    id: user.id,
    username: user.username,
    firstname: user.firstname,
    lastname: user.lastname,
    role: user.role
  };

  return { isValid: true, credentials };
};
