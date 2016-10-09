
$('.show-map-trigger').on('click', function(){


	var longitude = $(this).attr('data-longitude');
	var latitude = $(this).attr('data-latitude');
	var position = {lat: parseFloat(latitude), lng: parseFloat(longitude)}; // mottura


	$('map-contact').empty();

	var map = new GoogleMap('map-contact');

	map.create();
	map.addMarker(position);
	map.setCenter(position);



});