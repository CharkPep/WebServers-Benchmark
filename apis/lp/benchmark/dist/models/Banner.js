"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BannerSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    onClickLink: { type: String, required: true },
    shown: { type: Number, required: true, default: 0 },
    percentage: { type: Number, required: true },
});
const Banner = (0, mongoose_1.model)('Banners', BannerSchema);
exports.default = Banner;
//# sourceMappingURL=Banner.js.map