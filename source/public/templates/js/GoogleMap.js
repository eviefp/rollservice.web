

function GoogleMap(map_id){
  var id = map_id;
  var default_position = {lat: 44.3736487, lng: 26.1205073}; // mottura
  var markers = [];
  var map;
  var infowindow;
  var position_window;
  var icon = {
            'prevendita': '/templates/icons/prevendita.png',
            'postvendita': '/templates/icons/postvendita.png',
            'assistenza': '/templates/icons/assistenza.png'
      };

  function NoGeolocation(errorFlag) {

    if (errorFlag == true) {
      alert("Geolocation service failed.");
    } else {
      alert("Your browser doesn't support geolocation.");
 
    }

  }

  return {
    create: function(){
      	if(id && document.getElementById(id)){
          console.log('map id: '+id);
      		if(!map)
			      map = new google.maps.Map(document.getElementById(id), {
			        center: default_position,
			        scrollwheel: true,
			        zoom: 12
			      });
  		}//else
  			//throw ">> GoogleMap: id canvas map missing";
    },
    defaultPosition: function(position){
      defaultPosition = position;
    },
    addMarker: function(position, data){

      var marker = new google.maps.Marker({
          position: position,
          map: map
      });

      markers.push(marker);

    },
    filterMarkers: function(markers_type){
      if(Array.isArray(markers_type)){
        for(var i = 0; i < markers.length; i++){

          var marker = markers[i];

          var ris = $.inArray(marker.category, markers_type);

           console.log("marker type: " + marker.category + " , filter: " + markers_type + " ris: " + ris);

          if(ris >= 0)
            marker.setVisible(true);
          else
            marker.setVisible(false);

        }
      }else
        throw ">> GoogleMap: invalid markers_type";

    },
    geolocate: function(){

      var browserSupportFlag =  new Boolean();

      // Try W3C Geolocation (Preferred)
      if(navigator.geolocation) {
        browserSupportFlag = true;
        navigator.geolocation.getCurrentPosition(function(position) {
          initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
          
          if(!position_window)
            position_window = new google.maps.InfoWindow({map: map});

          position_window.setPosition(initialLocation );
          position_window.setContent('Posizione corrente');

          map.setCenter(initialLocation);
        }, function() {
          NoGeolocation(browserSupportFlag);
        });
      }
      // Browser doesn't support Geolocation
      else {
        browserSupportFlag = false;
        NoGeolocation(browserSupportFlag);
      }

    },
    addAutocomplete: function(id_input){

      var input = document.getElementById(id_input);

      var autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', map);

      autocomplete.addListener('place_changed', function() {

      var place = autocomplete.getPlace();

       if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(16); 
      }

    });

    },
    // da estendere tramite prototype
    addMotturaPoints: function(points_visibility){

        $.ajax({
          url: '/map-points',
          type: 'GET',
        })
        .done(function(data) {
          console.log("success mappoint");

          var json = data;

          var infowindow = new google.maps.InfoWindow();

            jQuery.each(json, function(i,item) {

                var latitude = parseFloat(item.latitude);
                var longitude = parseFloat(item.longitude);
                var category = item.label.toLowerCase();
              
                var marker = new google.maps.Marker({
                  position: {lat: latitude, lng: longitude },
                  map: map,
                  title: item.title,
                  address: item.address,
                  number: item.number,
                  city: item.city,
                  desc: item.description,
                  tel: item.telephone,
                  email: item.email,
                  icon: icon[category],
                  category: category,
		  district: item.district
                });

                markers.push(marker);

                marker.setVisible(points_visibility);

                marker.addListener('click', function (){

                    var content = "<div>"+
                                    "<h2>"+marker.title+"</h2>"+
                                    "<p>"+marker.desc+"</p>"+
                                    "<p><b>"+translations.city+": </b>"+marker.city+" ("+marker.district +")</p>"+
                                    "<p><b>"+translations.address+": </b>"+marker.address+" " + marker.number + "</p>"+
                                    "<p><b>"+translations.telephone+": </b>"+marker.tel+"</p>"+
                                    "<p><b>"+translations.email+": </b>"+marker.email+"</p>"+
                                  "</div>";

                    infowindow.setContent(content);

                    infowindow.open(map, marker);
                    map.panTo(this.getPosition());
                    map.setZoom(15);
                 
              });

            });

        })
        .fail(function() {
          console.log("error loading map points");
        });

    },
    setCenter : function(position){
       map.setCenter(position);
    },
    setZoom: function(zoom){
       map.setZoom(zoom);
    }

  };
};


