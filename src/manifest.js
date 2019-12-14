//plugins initialization
//inert, vision required for hapi-swagger
module.exports = {
    server: {
        port: 8000
    },
    register: {
        plugins: [
            {
                plugin: require('hapi-swagger'),
                options: {
                    grouping:'tags',
                    host:'localhost:8000',
                    jsonEditor:true,
                    info: {
                        contact: {
                            name: 'Darryl',
                            email:'test'
                        }
                    }
                }
            },
            {
                plugin: require('inert')
            },
            {
                plugin:'vision'
            }
        ]
    }
}