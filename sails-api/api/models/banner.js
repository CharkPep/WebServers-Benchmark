const { Schema, model } = require('mongoose');

const BannerSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    onClickLink: { type: String, required: true },
    shown: { type: Number, required: true, default: 0 },
    percentage: { type: Number, required: true },
});

const Banner = model('Banners', BannerSchema);

module.exports = Banner;
