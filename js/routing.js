$(
    /*function initMap() {
        map = new google.maps.Map(document.getElementById('Location-map'), {
        center: {lat: 24.7867056, lng: 120.9959000},
        zoom: 16});
    }*/
    function initMap() {
        var fenway = {lat: 24.7867059, lng: 120.9989300};
        var pointA = new google.maps.LatLng(24.7867059, 120.9989300);
        var pointB = new google.maps.LatLng(24.7867056, 120.9959000);
        var myOptions = {
            zoom: 16,
            center: pointA
        };
        map = new google.maps.Map(document.getElementById('Location-map'), myOptions);
        // Instantiate a directions service.
        directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer({
            map: map,
            suppressMarkers: true
        });
        //new GStreetviewPanorama(document.getElementById("pano"), {latlng: fenway}); 
        var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
        position: fenway,
        pov: {
          heading: 34,
          pitch: 10
        }
        });
        map.setStreetView(panorama);
        
        markerA = new google.maps.Marker({
            position: pointA,
            title: "point A",
            label: "start",
            map: map
        });
        markerB = new google.maps.Marker({
            position: pointB,
            title: "point B",
            label: "end",
            map: map
        });
        
        function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
            var request = {
                origin: pointA,
                destination: pointB,
                avoidTolls: true,
                avoidHighways: false,
                travelMode: google.maps.TravelMode.DRIVING
            };
        
            directionsService.route(request,function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                    var distance= response.routes[0].legs[0].distance.value;
                    $("#Distance").text(distance + " Meters (Driving)");
                }
                else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }

        // get route from A to B
        calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);
        

    }
  
);

$(function () {
    var pinColor = "ffffff";
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
            new google.maps.Size(21, 34),
            new google.maps.Point(0,0),
            new google.maps.Point(10, 34));
        var markers = [];        
        var markersDom = $('#markers > span');

        /*google.maps.event.addListener(map,"click", function(event){            
            var str = prompt('Where is this place?','toilet');
            if(str)
            {
                //deleteMarkers();//doesn't work
                markersDom.append('<button class=".btn-default delete" >'+event.latLng+'</button>');
                var infowindow = new google.maps.InfoWindow(
                {
                   content: str
                });
                var marker_Click = new google.maps.Marker({
                    map: map,
                    position:event.latLng,
                    content: str
                }); 
                marker_Click.addListener('click', function() {
                               infowindow.open(map, marker_Click);
                });
                markers.push(marker_Click);

                var temp_pos = event.latLng;
                var ttemp_lat = temp_pos.lat();
                var ttemp_lng = temp_pos.lng();
                $('#lat').val(ttemp_lat) ; 
                $('#lng').val(ttemp_lng) ;
                $('#description').val(str) ;
            }
                 
        });*/

});