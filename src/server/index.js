'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {
    const config = {
        port: 3000,
        host: 'localhost'
    };
    const server = Hapi.server(config);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
