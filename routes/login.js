const router = require('express').Router();

const validate = require('../utils/validation/validation');

//const bcrypt = require('bcrypt')

router.get('/', (req, res) => {
	res.render('login.ejs', {body:{}, errors: {}});
});

router.post('/', (req, res) => {
	if (validate(req.body).length !== 0) {
		console.log(req.body)
		res.render('login.ejs', {body: req.body , error: validate(req.body)});
	} else {
		res.redirect('/011entertainment/event');
	}
});


module.exports = router;