//plugins initialization
//inert, vision required for hapi-swagger
module.exports = {
  server: {
    port: 8000,
    state: {
      strictHeader: false
    },
  },
  register: {
    plugins: [
      {
        plugin: require('hapi-cors'),
        options: {
          origins: ['http://localhost:3000']
        }
      },
      {
        plugin: require('hapi-swagger'),
        options: {
          grouping: 'tags',
          host: 'localhost:8000',
          jsonEditor: true,
          info: {
            contact: {
              name: 'Darryl',
              email: 'putemailhere@gmail.com'
            }
          }
        }
      },
      {
        plugin: require('inert')
      },
      {
        plugin: 'vision'
      },
      {
        plugin: require('./api/auth'),
        routes: {
          prefix: '/auth'
        }
      },
      {
        plugin: require('./api/user/userapi'),
        routes: {
          prefix: '/user'
        }
      },
    ]
  }
};
