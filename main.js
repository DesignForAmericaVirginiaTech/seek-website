Parse.initialize("csMOVllLLOUIenFmTG1oH6ayhdinQnWpYr0VwGIx", "soFGuQMj57zBvU6PFHHJQxL05kcQWEV90QWmLJId");

var locations = [];

var parseloc = Parse.Object.extend("locations");
var query = new Parse.Query(parseloc);
query.find({
  success: function(results) {
    for (var i = 0; i < results.length; i++) {
    	locations[i] = {
    		latitude: results[i].get("latitude"),
    		longitude: results[i].get("longitude"),
    		name: results[i].get("name")
    	}
    }

    initialize();
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

function initialize() {
	var mapCanvas = document.getElementById('map_canvas');
	var mapOptions = {
	  center: new google.maps.LatLng(37.2303918, -80.4218075),
	  zoom: 13,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);

	for (var i = 0; i < locations.length; i++) {
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i].latitude, locations[i].longitude),
			map: map,
			title: locations[i].name
		});
	}
}

$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});