function EventRegistrationMail (email, name, event, key) {
	this.from = "info@011Entertainment.co.za",
	this.to = email,
	this.subject = 'Event Registration',
	this.html = `
			<div style="margin: 0; padding: 0; background: #fff; font-family: sans-serif; color: #17202A; height:215px;">
				<div style="justify-content: center; align-content: center; text-align: center; margin: auto; width: 80%; height:100%">
					<header>
						<a href="/" class="logo" style="color: black; height: 60px; line-height: 60px; padding: 0 20;
							text-align: center; font-weight: 700; text-decoration: none; font-size: 28px;">
								011Entertainment
						</a>
					</header>
					<h2>Hi ${name}</h2>
					<p style="font-size: 15px; margin-bottom: 20px;">Thank you for your support in registering for the ${event} event. Please click this link to certify your registration</p>
					<a href=http://localhost:5000/verify?k=${key} style="text-decoration: none;">
						<span 
							style="background: #17202A; border: none; border-radius: 2px; font-family: sans-serif;
							padding: 12px 20px; min-width: 200px; margin: 10px; cursor: pointer; font-size: 15px; color: #fff">
								Verify
						</span>
					<a/>
				</div>
			</div>
		`
}

module.exports = EventRegistrationMail;