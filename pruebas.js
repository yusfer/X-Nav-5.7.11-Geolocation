

/*function get_location() {
	if (Modernizr.geolocation) {
		navigator.geolocation.getCurrentPosition(show_map);
	} else {
		// no native support; maybe try a fallback?
	}
}*/



$(document).ready(function(){

latitude=0;
longitude=0;
		function get_location() {
		if (Modernizr.geolocation) {
			navigator.geolocation.getCurrentPosition(show_map);
		} else {
			$("#map").innerHTML="No tienes geolocation"
		// no native support; maybe try a fallback?
		}
	}
	function show_map(position) {
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;
		alert(longitude)
		 var map = L.map('map').setView([latitude,longitude], 13);

// add an OpenStreetMap tile layer
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
// let's show a map or do something interesting!
	}
	get_location()
   
	
	

console.log(map.locationfound)

	
	
})
