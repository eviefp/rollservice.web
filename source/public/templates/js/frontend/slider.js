function adaptVideoFullWidth()
{
	
	$.each($(".slick-slide"),function(i,slide){
		var slide = $(slide);
		var video = slide.find('.video-js');

		//console.log(video.size());
		if (video.size() > 0)
		{
			var w = slide.width();
			var h = Math.round(315 * w / 560);

			//console.log(video_id+' '+w+'x'+h);
			var video_id = video.attr('id');
			var player = videojs(video_id);
			player.height(h);
			player.width(w);
		}
	});
	
	
		
}


$(document).ready(function(){
	$(window).resize(function() {
		adaptVideoFullWidth();
	});
	$(document).ready(function () {
		adaptVideoFullWidth();
	});
});
