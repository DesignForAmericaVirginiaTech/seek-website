Parse.initialize("csMOVllLLOUIenFmTG1oH6ayhdinQnWpYr0VwGIx", "soFGuQMj57zBvU6PFHHJQxL05kcQWEV90QWmLJId");

var mapstyle = [
  {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "weight": 7.5 },
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "color": "#FFC107" }
    ]
  },{
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#ADD8E6" }
    ]
  }
];
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
	var styledMap = new google.maps.StyledMapType(mapstyle, {name: "Styled Map"});
	var mapCanvas = document.getElementById('map-canvas');
	var mapOptions = {
		center: new google.maps.LatLng(37.233522, -80.464406),
		zoom: 13,
		disableDefaultUI: true,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
	map.mapTypes.set('map_style', styledMap);
  	map.setMapTypeId('map_style');

	for (var i = 0; i < locations.length; i++) {
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i].latitude, locations[i].longitude),
			map: map,
			title: locations[i].name
		});
	}
}