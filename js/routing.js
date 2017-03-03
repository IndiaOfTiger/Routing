$(
    /*function initMap() {
        map = new google.maps.Map(document.getElementById('Location-map'), {
        center: {lat: 24.7867056, lng: 120.9959000},
        zoom: 16});
    }*/
    function initMap() {
        var fenway = {lat: 24.7867059, lng: 120.9989300};
        var initialLocation;
        var defaultLo = new google.maps.LatLng(24.7867059, 120.9989300);
        var browserSupportFlag = new Boolean();
        var myOptions = {
            zoom: 16,
            center: pointA
        };
        //var taipei = new google.maps.LatLng(25.08, 121.45);   
       
        /*if(navigator.geolocation) {
            browserSupportFlag = true;
            navigator.geolocation.getCurrentPosition(function(position) {
                initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                map.setCenter(initialLocation);
                }, function() {
                  handleNoGeolocation(browserSupportFlag);
            });
        }
        
//Browser doesn't support Geolocation
        else {
            browserSupportFlag = false;
            handleNoGeolocation(browserSupportFlag);
        }
 

        function handleNoGeolocation(errorFlag) {
            if (errorFlag == true) {
                alert("地圖定位失敗");
            }
            else {
                alert("您的瀏覽器不支援定位服務");
            }
            initialLocation = defaultLo;
            map.setCenter(initialLocation);
        }*/

        //new google.maps.LatLng(24.7867059, 120.9989300)
        var pointA = new google.maps.LatLng(24.7856059, 121.0010000);
        var pointB = new google.maps.LatLng(24.7855056, 121.0953000);
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
                travelMode: google.maps.TravelMode.DRIVING,
                provideRouteAlternatives: true
            };
            var i=0;
            directionsService.route(request,function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                    $('#cancel').on('click', function(){
                        if(i<response.routes.length)
                        {
                            i++;
                            directionsDisplay.setMap(null);
                            console.log("haha"+i);
                            directionsDisplay = new google.maps.DirectionsRenderer({
                                map: map,
                                directions: response,
                                routeIndex: i,
                                suppressMarkers: true
                            });
                        }
                        else
                        {
                            alert("Only so");
                        }
                        
                    });
                    /*for (var i = 0, len = response.routes.length; i < len; i++) {
                        new google.maps.DirectionsRenderer({
                        map: map,
                        directions: response,
                        routeIndex: 0,
                        suppressMarkers: true
                        });
                        //console.log("Number of route: "+len);
                    }*/
                    /*var distance= response.routes[0].legs[0].distance.value;
                    $("#Distance").text(distance + " Meters (Driving)");*/
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