require('dotenv').config();
require('./models/Dogeet');

const app = require('./app'),
    mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`))