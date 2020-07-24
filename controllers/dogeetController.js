const mongoose = require('mongoose'),
    Dogeet = mongoose.model('Dogeet');

module.exports.new = (req, res) => res.render('new');

module.exports.newAction = async (req, res) => {
    const last = await Dogeet.findOne({}, {}, { sort: { 'id': -1 } });
    req.body.id = last.id + 1;
    const dogeet = new Dogeet(req.body);
    await dogeet.save();
    res.redirect(`/${req.body.id}`);
}

module.exports.find = async (req, res) => {
    const dogeet = await Dogeet.findOne({ 'id': Number(req.params.id) });
    res.render('dogeet', { body: dogeet.body });
}