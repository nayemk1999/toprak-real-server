const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    area: {
        type: Number,
        require: true
    },
    nearestPlace: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image1: {
        type: String,
        require: true
    },
    image2: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    division: {
        type: String,
        require: true
    },
    district: {
        type: String,
        require: true
    },
    upazilla: {
        type: String,
        require: true
    },
    beds: {
        type: String,
        require: true
    },
    bath: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    purpose: {
        type: String,
        require: true
    },
    completion: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    }

}, { timestamps: true });

const PostData = mongoose.model('PostData', postSchema);
module.exports = PostData;