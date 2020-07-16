const nodemailer = require('nodemailer');

function sendMail (options) {
	let transporter = nodemailer.createTransport({
	    service: "SendGrid",
	    auth: {
	      user: 'phethulwazib.donga@gmail.com', // generated ethereal user
	      pass: '011Password.', // generated ethereal password
	    }
	 });
	transporter.sendMail(options).then( () => {
		console.log('Email sent')
	}).catch( err => {
		console.log(err);
	})
}

module.exports = sendMail; 