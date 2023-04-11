require('dotenv').config();

const express = require('express');
const db = require('./config/connection');
const api_routes = require('./routes/api_routes');
const PORT = process.env.PORT || 3000;

const app = express();
console.log(process.env);

app.use(express.static('public'));
api_routes.use(express.json());

app.use('/api', api_routes);

db.sync({force: true}).then(() => {
    app.listen(PORT, () => console.log('server listening on PORT %s', PORT));
});