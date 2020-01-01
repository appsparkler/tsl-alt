'use strict';

// const Hapi = require('@hapi/hapi');
const Glue = require('@hapi/glue');
const manifest = {
  server: {
      port: 3000,
      host: 'localhost'
    }
}

const init = async () => {
    const server = await Glue.compose(manifest)
    const helloWorldRoute = {
      method: 'GET',
      path: '/',
      config: {
        handler(){
          return 'hello world...'
        }
      }
    }
    server.route(helloWorldRoute)
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
