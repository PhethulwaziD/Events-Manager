const express = require('express');

const app = express();

const mongoose = require('mongoose');

//Database Configuration 

const db = require('./config/keys').MongoUri;

//Database Connection 

mongoose.connect(db, {useNewUrlParser: true , useUnifiedTopology: true})
.then( () => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.set('view engine', 'ejs');

app.use('/styles', express.static('styles'));

app.use(express.static(__dirname +'/utils'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

/**********ROUTES**********/

//Landing Route
app.use('/', require('./routes/landing'));

//Login Route

app.use('/011entertainment/login', require('./routes/login'));

//Admin Routes

app.use('/011entertainment/dashboard', require('./routes/dashboard'));

app.use('/011entertainment/events', require('./routes/events'));

app.use('/011entertainment/calendar', require('./routes/calendar'));

app.use('/011entertainment/users', require('./routes/users'));

app.use('/011entertainment/settings', require('./routes/settings'));

//Users Routes


//Listen to sever
app.listen(3000, () => {
	console.log("Listening to server")
})
