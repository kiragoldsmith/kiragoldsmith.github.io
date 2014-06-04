function sendEmail() {
	var name = $('#first').val() + " " + $('#last').val(),
		email = $('#email').val(),
		subject = $('#subject').val(),
		message = $('#message').val();
	$.post('https://api.sendgrid.com/api/mail.send.json?api_user=JonathanOst&api_key=hownowbrowncow&to=kiragoldsmith@gmail.com&toname=Kira Goldsmith&subject=' + subject +'&text='+ message +'&from=' + email + '&fromname=' + name);
}

$('#contact').submit(function () {
	sendEmail();
	$('#contact').css('text-align','center');
	$('#contact').css('font-size', 30);
	$('#contact').html('Thanks for the email!  I\'ll be in touch.');
	return false;
});

$('.main-title').fitText(1, { minFontSize: '40px', maxFontSize: '75px' });