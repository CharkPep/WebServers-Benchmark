"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Banner_1 = require("../models/Banner");
function getBanner() {
    var randomPercentage = Math.random();
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