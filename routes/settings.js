const router = require('express').Router();


router.get('/', (req, res) => {
	res.render('settings.ejs');
});

router.post('/', (req, res) => {
	res.render('settings.ejs');
});


module.exports = router;