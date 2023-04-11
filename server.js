require('dotenv').config();

const express = require('express');
const db = require('./config/connection');
const api_routes = require('./routes/api_routes');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.use('/api', api_routes);

db.sync({force: true}).then(() => {
    app.listen(PORT, () => console.log('server listening on PORT %s', PORT));
});