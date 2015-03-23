$(document).ready(function(){
	/*MQA.EventUtil.observe(window, 'load', function() {
 
      // create an object for options
      var options = {
        elt: document.getElementById('map'),           // ID of map element on page
        zoom: 10,                                      // initial zoom level of the map
        latLng: { lat: 39.743943, lng: -105.020089 },  // center of map in latitude/longitude
        mtype: 'map',                                  // map type (map, sat, hyb); defaults to map
        bestFitMargin: 0,                              // margin offset from map viewport when applying a bestfit on shapes
        zoomOnDoubleClick: true                        // enable map to be zoomed in when double-clicking on map
      };
 
      // construct an instance of MQA.TileMap with the options object
      window.map = new MQA.TileMap(options);
    });
    
    */
    var map = L.map('map').setView([40.2838, -3.8215], 13);

// add an OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	
	L.marker([40.2838, -3.8215]).addTo(map)
    .bindPopup('Aulario III')
    .openPopup();
    
    
    map.on('click', function(e) {
		L.marker(e.latlng).addTo(map)
		.bindPopup('New Popup')
		.openPopup();
		console.log(e)
});

console.log(map.locationfound)

	
	
})


