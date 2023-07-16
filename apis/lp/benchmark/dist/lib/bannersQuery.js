"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBanner = void 0;
const tslib_1 = require("tslib");
const Banner_1 = tslib_1.__importDefault(require("../models/Banner"));
function getBanner() {
    let randomPercentage = Math.random();
    return Banner_1.default
        .find({ percentage: { $gte: randomPercentage } }).limit(1);
}
exports.getBanner = getBanner;
// connectDb().then(() => {
//     console.time('query')
//     getBanner().then((res) => {
//         console.timeEnd('query')
//         console.log(res)
//     })
// })
//# sourceMappingURL=bannersQuery.js.map