"use strict";
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
var boot_1 = require("@loopback/boot");
var core_1 = require("@loopback/core");
exports.ApplicationConfig = core_1.ApplicationConfig;
var rest_explorer_1 = require("@loopback/rest-explorer");
var repository_1 = require("@loopback/repository");
var rest_1 = require("@loopback/rest");
var service_proxy_1 = require("@loopback/service-proxy");
var path_1 = require("path");
var sequence_1 = require("./sequence");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        // Set up the custom sequence
        _this.sequence(sequence_1.MySequence);
        // Set up default home page
        _this.static('/', path_1.default.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        _this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        _this.component(rest_explorer_1.RestExplorerComponent);
        _this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        _this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
        return _this;
    }
    return App;
}(boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication)))));
exports.App = App;
//# sourceMappingURL=application.js.map