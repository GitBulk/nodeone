const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const port = 9000;

app.use(bodyParser());

MongoClient.connect(db.connectionString, function (err, db) {
    if (err) {
        return console.log(err);
    }

    require('./app/routes')(app, db);

    app.listen(port, () => {
        console.log('Server started on port ' + port);
    });
});

