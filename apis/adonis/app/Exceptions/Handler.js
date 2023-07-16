"use strict";
/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = require("@ioc:Adonis/Core/Logger");
var HttpExceptionHandler_1 = require("@ioc:Adonis/Core/HttpExceptionHandler");
var ExceptionHandler = /** @class */ (function (_super) {
    __extends(ExceptionHandler, _super);
    function ExceptionHandler() {
        return _super.call(this, Logger_1.default) || this;
    }
    return ExceptionHandler;
}(HttpExceptionHandler_1.default));
exports.default = ExceptionHandler;
//# sourceMappingURL=Handler.js.map