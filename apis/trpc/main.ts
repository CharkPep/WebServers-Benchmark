import connetMongo from "../config/connetMongo";

const http = require('http');
import { createOpenApiHttpHandler } from 'trpc-openapi';

import { appRouter } from './appRouter';
const server = http.createServer(createOpenApiHttpHandler({ router: appRouter })); /* 👈 */

connetMongo().then(() => {
    server.listen(5000, () => {
        console.log('Server started on port 5000')
    });
})

