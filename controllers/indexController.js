const mongoose = require('mongoose'),
    Dogeet = mongoose.model('Dogeet');

module.exports = async (req, res) => {
    const dogeets = await Dogeet.find();
    res.render('index', { dogeets });
}