require('dotenv').config();

const express = require('express');
const db = require('./config/connection');
const api_routes = require('./routes/api_routes');
const SSM = require('./models/SSM')
const PORT = process.env.PORT || 3000;

const app = express();

// app.use(express.static('public'));
// api_routes.use(express.json());

// app.use('/api', api_routes);

db.sync({force: true}).then(() => {
    SSM.create({
        name: 'Enrique',
        age: 39,
        email: 'engarcia@class.com'
    }).then((newSSM) => {
        console.log(newSSM);
    });
    SSM.create({
        name: 'Jeanna',
        age: 35,
        email: 'jeansmith37@class.com'
    }).then((newSSM) => {
        console.log(newSSM);
    });
    SSM.findAll().then((ssms) => {
        console.log(ssms);
    });
});

db.sync({force: true}).then(() => {
    app.listen(PORT, () => console.log('server listening on PORT %s', PORT));
});