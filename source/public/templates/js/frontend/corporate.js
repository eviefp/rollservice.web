$(document).ready(function () {
	$('.corporate h1').click(function () {

		$('.corporate h1').addClass('h1-off');
		$(this).removeClass('h1-off');

		$('.corporate .content-1, .corporate .content-2').hide();

		var target = $(this).attr('data-target');
		$(target).show();
	});

	var w = $('.corporate .text.center').width();
	console.log(w);
	$('.corporate #timeline, #issues, #issues li').width(w+'px');

	$().timelinr();
	/*
	{ arrowKeys: 'false' }
	 */
});