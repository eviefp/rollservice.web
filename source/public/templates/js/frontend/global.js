

$(window).scroll(function (e) {
  var scroll = $(window).scrollTop();
  if (scroll > 0 && $(window).height() > 600) //
  {
    $('.top').addClass('top-fixed');
    $('body').css('margin-top', $('.top').height()+'px');
  }
  else
  {
    $('.top').removeClass('top-fixed');
    $('body').css('margin-top', 0);
  }
  //console.log(scroll);
});


$(window).resize(function() {
  adaptYoutubeVideoFullWidth();
});

function adaptYoutubeVideoFullWidth()
{
  $.each($("iframe.youtube"),function(i,item){
      var item = $(item);
      var container = item.parent();


      var w = container.width();
      var h = Math.round(315 * w / 560);

      console.log(w+'x'+h);
      item.attr('height', h);
      item.attr('width',w);
      

    });
}


$(document).ready(function(){

var cont=$('.parent-container');
	
	if(cont.length>0){
		$('.parent-container').magnificPopup({
			delegate: 'a.magic', // child items selector, by clicking on it popup will open
			type: 'image',
			gallery: {
					// options for gallery
					enabled: true
				      }});
	}
	
	//var elem=$('.header-image .text-right .otherInfo');
	//if(elem.length>0){
	//	$(elem).addClass('animated slideInUp');
	//}
	
  

/*
  $('.top').hover(function () {
    $(this).css('opacity', 1)
  }).mouseleave(function () {
    $(this).css('opacity', 0.6)
  });
*/
  

/*
  $('.top').hover(function () {
    $(this).css('opacity', 1)
  }).mouseleave(function () {
    $(this).css('opacity', 0.6)
  });
*/


  if ($('#map-mottura-point').is('*'))
  {
    var map = new GoogleMap('map-mottura-point');

    map.create();
    map.addAutocomplete('search-point');
    map.addMotturaPoints(true);
  }
  
  
/*
  $('#prevenditacheck,#postvenditacheck,#assistenzacheck').on('change', function(){
      / *
        var type = this.getAttribute('data-type');

        console.log("checked: " + this.checked);
        * /

         var filters = [];
        if($('#prevenditacheck').prop('checked'))  filters.push('prevendita');
        if($('#postvenditacheck').prop('checked'))  filters.push('postvendita');
        if($('#assistenzacheck').prop('checked'))  filters.push('assistenza');

       

        map.filterMarkers(filters);
	
	

  });
  */

$('.slider-default').slick({
		infinite: true,
		speed: 400,
		autoplaySpeed:8000,
		autoplay: true,
		arrows:true,
		cssEase: 'ease',
		pauseOnHover: true,
		adaptiveHeight: true
	});



$(".top-menu-lang li").hover(
    function(){
      $(".top-menu-lang-others").show();
    }
);

//$(".top-menu-lang-others li ").mouseout(
//  function(){
//      $(".top-menu-lang-others").hide();
//    }
//);

// $(".top-menu-lang li").out(function(){
//    $(".top-menu-lang li").hide();
//    $(".top-menu-lang li.active").show();
//});


	
  adaptYoutubeVideoFullWidth();



   $(".search").click(function(){
        $("body").css("overflow","hidden");
        $("#overlaySearch").addClass("open");
   });
   
    $(".closeSearch").click(function(){
         $("#overlaySearch").removeClass("open");
        $("body").css("overflow","auto");            
   });

    $("#current-location").click(function(){

      map.geolocate();

    });

    
  
  });




	/*


	//se modificato aggiungere al blocco che gestisce lo slider

$(document).ready(function(){





	$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		
		  $('.slick-active .caption').removeClass('animated bounceInLeft');
		  $('.slick-active .caption h1').removeClass('animated flipInX');
		  //$('.slick-active .caption').addClass('hidden');
		  $('.slick-active .caption h1').addClass('hidden');

	   
	});
	$('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		 
		//$('.slick-active .caption').addClass('animated bounceInLeft');
		//$('.slick-active .caption').removeClass('hidden');

		$('.slick-active .caption h1').addClass('animated flipInX');
		 $('.slick-active .caption h1').removeClass('hidden');

	});





});
*/

$(document).ready(function () {
    $('.tabs [data-tab]').css('cursor', 'pointer').click(function () {
        $.each($(this).parent().find('[data-tab]'), function (i, v) {
            var node = $(v);
            $(node.attr('data-tab')).hide();
        });
        $($(this).attr('data-tab')).show();
    });
});