const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        trim: true
    },
    id: {
        type: Number,
        required: true
    }
});

schema.pre('save', () => {});
module.exports = mongoose.model('Dogeet', schema);