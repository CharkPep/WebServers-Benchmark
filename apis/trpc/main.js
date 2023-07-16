"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connetMongo_1 = require("../config/connetMongo");
var http = require('http');
var trpc_openapi_1 = require("trpc-openapi");
var appRouter_1 = require("./appRouter");
var server = http.createServer(trpc_openapi_1.createOpenApiHttpHandler({ router: appRouter_1.appRouter })); /* 👈 */
connetMongo_1.default().then(function () {
    server.listen(5000, function () {
        console.log('Server started on port 5000');
    });
});
//# sourceMappingURL=main.js.map