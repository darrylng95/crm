//plugins initialization
//inert, vision required for hapi-swagger
module.exports = {
  server: {
    port: 8000,
    state: {
      strictHeader: false
    }
  },
  register: {
    plugins: [
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
        plugin: require('./api/user/userapi'),
        routes: {
          prefix: '/user'
        }
      }
    ]
  }
};
