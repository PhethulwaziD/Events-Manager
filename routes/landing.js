const router = require('express').Router();

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://localhost:27017";

const Event = require('../models/Event');

const sendMail = require('../config/mail/sendMail');

const EventRegistrationMail = require('../config/mail/EventRegistrationMail');

const fetch = require('node-fetch');

const randomstring = require('randomstring');


router.get('/', (req, res) => {
	Event.find({}).sort({date: 1}).then( result => {
		res.render('landing.ejs', {result: result});
	});
});

router.post('/', (req, res) => {
	console.log(req.body);
	if (req.body.name) {
		//console.log(req.body);
		// fetch('https://www.payfast.co.za/eng/process')
		// .then(res => res.text())
		// .then(body => console.log(body));
		// regObject = new EventRegistrationMail(req.body.email, req.body.name, req.body.event, 'k');
		// sendMail(regObject);
		res.send('done');
	}
});


module.exports = router;