// $(document).ready(function () {

// 	$('.privacy_flag').parentsUntil('form').parent().find('[type="submit"]').click(function (e) {
// 		if (!$(this).parentsUntil('form').parent().find('.privacy_flag').is(':checked'))
// 		{
// 			alert(privacy_flag_text);
// 			e.preventDefault();
// 		}
// 	});

// 	$('#legal_cookie_banner .agree a').click(function (e) {
// 		e.preventDefault();
// 		setCookie('legal_cookie_policy', 1, 90);
// 		$('#legal_cookie_banner').hide();
// 	});

// 	if (getCookie('legal_cookie_policy') != 1)
// 	{
// 		$('#legal_cookie_banner').show();
// 		$('.credits').css('margin-bottom', '140px');
// 	}
// });

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++)
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
	}
	return "";
} 