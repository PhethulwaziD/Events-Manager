const router = require('express').Router();


router.get('/', (req, res) => {
	res.render('dashboard.ejs');
});

router.post('/', (req, res) => {
	res.render('dashboard.ejs');
});


module.exports = router;