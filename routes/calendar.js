const router = require('express').Router();


router.get('/', (req, res) => {
	res.render('calendar.ejs');
});

router.post('/', (req, res) => {
	res.render('calendar.ejs');
});


module.exports = router;