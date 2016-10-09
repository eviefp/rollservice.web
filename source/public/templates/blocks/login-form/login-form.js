/*
if ($(document).width() > 991) $('#login-form .btn-login').prop('disabled', false);
{
	$('#login-form .btn-login').prop('disabled', true);
	messenger.info("L'accesso all'amministrazione è consentito ");
}
*/

$(document).ready(function () {

	$('#login-form').submit(function (e) {
		e.preventDefault();

		var form = $(this);

		$.ajax({
			type: $(this).attr('method'),
			url: $(this).attr('action'),
			dataType: 'json',
			data: $(this).serialize(),
			error: function(jqXHR, textStatus, errorThrown) {
				messenger.error("Error", "There was an error while sending data");
			},
			success: function(json, textStatus, jqXHR) {
				if (json.success)
				{
					window.location.href = json.redirect;
				}
				else
				{
					messenger.error(json.message);
				}
			},
			
		});

	});




	$('#password-recovery').submit(function (e) {
		e.preventDefault();

		var form = $(this);

		$.ajax({
			type: $(this).attr('method'),
			url: $(this).attr('action'),
			dataType: 'json',
			data: $(this).serialize(),
			error: function(jqXHR, textStatus, errorThrown) {
				messenger.error("Error", "There was an error while sending data");
			},
			success: function(json, textStatus, jqXHR) {
				if (json.success)
				{
					messenger.success(json.message);
					form.trigger('reset');
				}
				else
				{
					messenger.error(json.message);
				}
			},
			
		});

	});


	$('#password-recovery-btn').click(function () {
		var target = $('#password-recovery-collapse');
		if (target.is(':visible')) target.slideUp();
		else target.slideDown();
	});




});