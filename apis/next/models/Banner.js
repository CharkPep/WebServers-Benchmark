"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var dbConfig_1 = require("@/utils/dbConfig");
var BannerSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    onClickLink: { type: String, required: true },
    shown: { type: Number, required: true, default: 0 },
    percentage: { type: Number, required: true },
});
dbConfig_1.default();
var Banner = mongoose_1.model('Banners', BannerSchema);
exports.default = Banner;
//# sourceMappingURL=Banner.js.map