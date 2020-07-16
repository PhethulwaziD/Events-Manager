const router = require('express').Router();

const moment = require('moment');

const Event = require('../models/Event');

const multer = require('multer');

const path = require('path');


 //Storage Engine
 const storage = multer.diskStorage({
 	destination: './utils/uploads/',
 	filename: function (req, file, callback) {
 		callback(null, 
 			file.fieldname + '-' + Date.now() + path.extname(file.originalname))
 	}
 });

 //Init upload
 const upload = multer({storage: storage});

router.get('/', (req, res) => {
	Event.find({}).sort({day: 1}).then( result => {
		res.render('events.ejs', {result: result});
	});
});

router.post('/', upload.fields([{name: 'main', maxCount: 1}, {name: 'display', maxCount: 1}]), (req, res) => {
	console.log(req.body);
	if (req.body.request === 'delete'){
		Event.deleteOne({title: req.body.title}).then(result => {
			res.redirect('/011entertainment/events');
		}).catch( err => console.log(err));
	} else if (req.body.title && req.body.location) {

		const date = req.body.date.split(" ");
		const newEvent = new Event ({
			name: 'Admin',
			title: req.body.title,
			location: req.body.location,
			description: req.body.description,
			date: req.body.date,
			day: date[0],
			month: date[1],
			year: date[2],
			time: req.body.time,
			price: req.body.price,
			main: req.files.main[0].filename,
			display: req.files.display[0].filename,
		});
		newEvent.save().then( () => {
			console.log('Success');
			res.redirect('/011entertainment/events');
		}).
		catch( err => console.log(err));
	} else {
		console.log('print');
	}
});


module.exports = router;