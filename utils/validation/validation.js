
function validation (user) {
	if(!user.Username || !user.Password) {
		return ("Invalid username and password");
	} else if (user.Username.length == 0 || user.Password.length == 0) {
		return ("Invalid username and password");
	} else if (user.Username.length <= 4 || user.Password.length <= 8) {
		return ("Invalid username and password");
	}
	return('');
}

module.exports = validation;