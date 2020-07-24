const express = require('express'),
    mustache = require('mustache-express'),
    router = require('./routes/index');

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
app.engine('mst', mustache());
app.set('view engine', 'mst');
app.set('views', `${__dirname}/views`);

module.exports = app;