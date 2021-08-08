const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    }
})

const ReviewData = mongoose.model('ReviewData', reviewSchema);
module.exports = ReviewData;