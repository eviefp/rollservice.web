 function heightBoxText() {

           $(".boxDetails .text, .boxDetails .page-child-box > div").css('height', 'auto');

           if ($(window).width() <= 767) $(".boxDetails .page-child-box > div").css('height', '200px');



           var max_height = 0;
           $(".boxDetails .text").each(function(index, node) {
               max_height = Math.max(max_height, $(node).height());
           });
           //console.log(max_height);

           $(".boxDetails .text").css('height', max_height+'px');
  
            if ($(window).width() > 767)
                         $(".boxDetails .page-child-box > div").css('height', max_height+'px');
          
              
       }

$(document).ready(function(){


	$('.slider-casehistory').slick();
        
        
        


        heightBoxText();
        
});

$( window ).resize(function() {
            heightBoxText();
        });