'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); 
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');

let contacts = require('./data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(cors());

const mongodbUri = 'mongodb://user1:12345@ds011495.mlab.com:11495/apiscotch';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};





app.use('/api/contacts', require('./api/contacts/routes/post_contact'));
app.use('/api/contacts', require('./api/contacts/routes/get_contacts'));
app.use('/api/contacts', require('./api/contacts/routes/get_contact'));
app.use('/api/contacts', require('./api/contacts/routes/put_contact'));
app.use('/api/contacts', require('./api/contacts/routes/delete_contact'));

const hostname = 'localhost';
const port = 3001;

const server = app.listen(port, hostname, () => {

    mongoose.connect(mongooseUri, dbOptions, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Server is running at ' + hostname,  port);
    });
    
});