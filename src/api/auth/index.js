const service = require("./service");
const JWT = require("jsonwebtoken");

const secret = "NeverShareYourSecret"; // Never Share This! even in private GitHub repos!

exports.register = async function(server) {
  await server.register(require("hapi-auth-basic"));
  await server.register(require("hapi-auth-jwt2"));

  server.auth.strategy("simple", "basic", {
    validate: service.validateLogin
  });

  server.auth.strategy("jwt", "jwt", {
    key: secret,
    validate: service.validateToken
  });

  server.auth.default("jwt");

  server.route([
    {
      method: "GET",
      path: "/",
      config: { auth: false },
      handler: function(request, h) {
        return { text: "Token not required" };
      }
    },
    {
      method: "POST",
      path: "/login",
      config: {
        auth: "simple"
      },
      handler: function(request, h) {
        const token = JWT.sign(request.auth.credentials.username, secret); // synchronous
        return {
          token: token,
          credentials: request.auth.credentials
        }
      }
    },
    {
      method: "GET",
      path: "/restricted",
      config: { 
        auth: "jwt" 
      },
      handler: function(request, h) {
        const response = h.response({ 
          text: "You used a Token!",
          credentials: request.auth.credentials
        });
        response
        .header("Authorization", request.headers.authorization);
        return response;
      }
    }   
  ]);
};

exports.pkg = {
  name: "auth"
};
