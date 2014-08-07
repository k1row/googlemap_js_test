var fs = require('fs');
var locs = JSON.parse(fs.readFileSync('locations', 'utf8'));
for (var i in locs ) {
	var loc = locs[i];
	if(loc["way_id"] === 1) {
    console.log("new google.maps.Marker({position: new google.maps.LatLng("+loc["latitude"]+","+loc["longitude"]+"),map: map, icon: pinImage1, title: 'walk'});");
	}
	else if(loc["way_id"] === 2 || loc["way_id"] === 3) {
    console.log("new google.maps.Marker({position: new google.maps.LatLng("+loc["latitude"]+","+loc["longitude"]+"),map: map, icon: pinImage2, title: 'train'});");
	}
	else if(loc["way_id"] === 4 || loc["way_id"] === 5) {
    console.log("new google.maps.Marker({position: new google.maps.LatLng("+loc["latitude"]+","+loc["longitude"]+"),map: map, icon: pinImage3, title: 'taxi/car'});");
	}
	else if(loc["way_id"] === 6) {
    console.log("new google.maps.Marker({position: new google.maps.LatLng("+loc["latitude"]+","+loc["longitude"]+"),map: map, icon: pinImage4, title: 'bycycle'});");
	}
	else {
    console.log("new google.maps.Marker({position: new google.maps.LatLng("+loc["latitude"]+","+loc["longitude"]+"),map: map, icon: pinImage5, title: 'unknown'});");
	}
}
