"use strict";
/**
 * Config source: https://git.io/JfefZ
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = exports.profiler = exports.logger = exports.http = exports.appKey = void 0;
var proxy_addr_1 = require("proxy-addr");
var Env_1 = require("@ioc:Adonis/Core/Env");
/*
|--------------------------------------------------------------------------
| Application secret key
|--------------------------------------------------------------------------
|
| The secret to encrypt and sign different values in your application.
| Make sure to keep the `APP_KEY` as an environment variable and secure.
|
| Note: Changing the application key for an existing app will make all
| the cookies invalid and also the existing encrypted data will not
| be decrypted.
|
*/
exports.appKey = Env_1.default.get('APP_KEY');
/*
|--------------------------------------------------------------------------
| Http server configuration
|--------------------------------------------------------------------------
|
| The configuration for the HTTP(s) server. Make sure to go through all
| the config properties to make keep server secure.
|
*/
exports.http = {
    /*
    |--------------------------------------------------------------------------
    | Allow method spoofing
    |--------------------------------------------------------------------------
    |
    | Method spoofing enables defining custom HTTP methods using a query string
    | `_method`. This is usually required when you are making traditional
    | form requests and wants to use HTTP verbs like `PUT`, `DELETE` and
    | so on.
    |
    */
    allowMethodSpoofing: false,
    /*
    |--------------------------------------------------------------------------
    | Subdomain offset
    |--------------------------------------------------------------------------
    */
    subdomainOffset: 2,
    /*
    |--------------------------------------------------------------------------
    | Request Ids
    |--------------------------------------------------------------------------
    |
    | Setting this value to `true` will generate a unique request id for each
    | HTTP request and set it as `x-request-id` header.
    |
    */
    generateRequestId: false,
    /*
    |--------------------------------------------------------------------------
    | Trusting proxy servers
    |--------------------------------------------------------------------------
    |
    | Define the proxy servers that AdonisJs must trust for reading `X-Forwarded`
    | headers.
    |
    */
    trustProxy: proxy_addr_1.default.compile('loopback'),
    /*
    |--------------------------------------------------------------------------
    | Generating Etag
    |--------------------------------------------------------------------------
    |
    | Whether or not to generate an etag for every response.
    |
    */
    etag: false,
    /*
    |--------------------------------------------------------------------------
    | JSONP Callback
    |--------------------------------------------------------------------------
    */
    jsonpCallbackName: 'callback',
    /*
    |--------------------------------------------------------------------------
    | Cookie settings
    |--------------------------------------------------------------------------
    */
    cookie: {
        domain: '',
        path: '/',
        maxAge: '2h',
        httpOnly: true,
        secure: false,
        sameSite: false,
    },
    /*
    |--------------------------------------------------------------------------
    | Force Content Negotiation
    |--------------------------------------------------------------------------
    |
    | The internals of the framework relies on the content negotiation to
    | detect the best possible response type for a given HTTP request.
    |
    | However, it is a very common these days that API servers always wants to
    | make response in JSON regardless of the existence of the `Accept` header.
    |
    | By setting `forceContentNegotiationTo = 'application/json'`, you negotiate
    | with the server in advance to always return JSON without relying on the
    | client to set the header explicitly.
    |
    */
    forceContentNegotiationTo: 'application/json',
};
/*
|--------------------------------------------------------------------------
| Logger
|--------------------------------------------------------------------------
*/
exports.logger = {
    /*
    |--------------------------------------------------------------------------
    | Application name
    |--------------------------------------------------------------------------
    |
    | The name of the application you want to add to the log. It is recommended
    | to always have app name in every log line.
    |
    | The `APP_NAME` environment variable is automatically set by AdonisJS by
    | reading the `name` property from the `package.json` file.
    |
    */
    name: Env_1.default.get('APP_NAME'),
    /*
    |--------------------------------------------------------------------------
    | Toggle logger
    |--------------------------------------------------------------------------
    |
    | Enable or disable logger application wide
    |
    */
    enabled: true,
    /*
    |--------------------------------------------------------------------------
    | Logging level
    |--------------------------------------------------------------------------
    |
    | The level from which you want the logger to flush logs. It is recommended
    | to make use of the environment variable, so that you can define log levels
    | at deployment level and not code level.
    |
    */
    level: Env_1.default.get('LOG_LEVEL', 'info'),
    /*
    |--------------------------------------------------------------------------
    | Pretty print
    |--------------------------------------------------------------------------
    |
    | It is highly advised NOT to use `prettyPrint` in production, since it
    | can have huge impact on performance.
    |
    */
    prettyPrint: Env_1.default.get('NODE_ENV') === 'development',
};
/*
|--------------------------------------------------------------------------
| Profiler
|--------------------------------------------------------------------------
*/
exports.profiler = {
    /*
    |--------------------------------------------------------------------------
    | Toggle profiler
    |--------------------------------------------------------------------------
    |
    | Enable or disable profiler
    |
    */
    enabled: true,
    /*
    |--------------------------------------------------------------------------
    | Blacklist actions/row labels
    |--------------------------------------------------------------------------
    |
    | Define an array of actions or row labels that you want to disable from
    | getting profiled.
    |
    */
    blacklist: [],
    /*
    |--------------------------------------------------------------------------
    | Whitelist actions/row labels
    |--------------------------------------------------------------------------
    |
    | Define an array of actions or row labels that you want to whitelist for
    | the profiler. When whitelist is defined, then `blacklist` is ignored.
    |
    */
    whitelist: [],
};
/*
|--------------------------------------------------------------------------
| Validator
|--------------------------------------------------------------------------
|
| Configure the global configuration for the validator. Here's the reference
| to the default config https://git.io/JT0WE
|
*/
exports.validator = {};
//# sourceMappingURL=app.js.map