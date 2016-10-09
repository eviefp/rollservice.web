$(document).ready(function () {
	//$('#top-menu-btn').click(function () {
	//	$('ul.top-menu').toggle();
	//});
	//
	//$(window).resize(function () {
	//	if ($(window).width() > 919)
	//	{
	//		$('ul.top-menu, .sub-menu ul').show();
	//	}
	//	else $('ul.top-menu, .sub-menu ul').hide();
	//});
	//
	//$('#sub-menu-btn').click(function () {
	//	$('.sub-menu ul').toggle();
	//});
	//
	//
	
	/* prepend menu icon */
	$('#nav-wrap').prepend('<div id="menu-icon"><i class="fa fa-bars fa-2x"></i></div>');
	
	/* toggle nav */
	$("#menu-icon").on("click", function(){
		$("#nav").slideToggle();
		$(this).toggleClass("active");
	});
	
	$("#nav > li i").on("mouseenter click", function(){
		$("#nav li ul").hide();
		var menu=$(this).attr("data-menu");
		$("#"+menu).slideToggle();
	});
	
	$("#nav > li").on("mouseleave", function(){
		$("#nav li ul").hide();
	});
});

