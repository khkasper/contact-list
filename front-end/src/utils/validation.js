const fieldsValidation = (name, email, mobile, url) => {
	const nameValidation = name.length > 2;
	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const mobileRegex = /^[0-9]{11}$/;
	const urlRegex = /(https?:\/\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9])(:?\d*)\/?([a-z_\/0-9\-#.]*)\??([a-z_\/0-9\-#=&]*)/gi;
	
	return !(nameValidation
		&& emailRegex.test(email)
		&& mobileRegex.test(mobile)
		&& urlRegex.test(url));
	
}

export default fieldsValidation;
