"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerController = void 0;
const tslib_1 = require("tslib");
// import {inject} from '@loopback/core';
const rest_1 = require("@loopback/rest");
const bannersQuery_1 = require("../lib/bannersQuery");
class BannerController {
    async banner() {
        return await (0, bannersQuery_1.getBanner)();
    }
}
tslib_1.__decorate([
    (0, rest_1.get)('api/banner'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], BannerController.prototype, "banner", null);
exports.BannerController = BannerController;
//# sourceMappingURL=banner.controller.js.map