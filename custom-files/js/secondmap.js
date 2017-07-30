function initMap() {

  const waypts = [
    {location:new google.maps.LatLng(21.2956515, -157.8592579), stopover:true},
    {location:new google.maps.LatLng(21.2993957, -157.8591853), stopover:true},
    {location:new google.maps.LatLng(21.2970166, -157.8599900), stopover:true},
    {location:new google.maps.LatLng(21.2975939, -157.8604098), stopover:true}
  ];

  const origin =  new google.maps.LatLng(21.295714, -157.856714);

  const destination = new google.maps.LatLng(21.298853, -157.861457);

  // let uncheckedImg = 'http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/24/Lock-icon.png';
  // let checkedImg = 'http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/24/Unlock-icon.png';

  let uncheckedImg = './custom-files/check-notdone.svg';
  let checkedImg = './custom-files/check-done.svg';

  let currentLocImg = 'http://i.stack.imgur.com/orZ4x.png';
  let beer = 'http://icons.iconarchive.com/icons/iconshock/brilliant-food/32/beer-icon.png';

  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers : true});

  var styledMapType = new google.maps.StyledMapType(
            [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
],
            {name: 'Styled Map'});


  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 21.296299, lng: -157.855188},
    mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
  });

  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

  directionsDisplay.setMap(map);

  calculateAndDisplayRoute(directionsService, directionsDisplay);

  let fakeLikes = ['456', '237', '1,379', '122'];

  makeMarker(map, waypts[0].location, checkedImg, fakeLikes[0]);

  for (var i = 1; i < 4; i++){
    makeMarker(map, waypts[i].location, uncheckedImg, fakeLikes[i]);
  };

  makeMarker(map, destination, beer, "");

  makeMarker(map, origin, currentLocImg, "");




  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: origin,
      destination: destination,
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: 'WALKING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        var route = response.routes[0];

        // For each route, display summary information.
        for (var i = 0; i < route.legs.length-1; i++) {
        //   var routeSegment = i + 1;
        //   summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
        //       '</b><br>';
        //   summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
        //   summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        // console.log('END ADDRESS', route.legs[i].end_location.lat(), route.legs[i].end_location.lng());
          // makeMarker( route.legs[i].end_location, './assets/locked.png' , "Hello" );
        //   summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
        }
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}

function makeMarker (map, position, icon, label ) {

 let marker = new google.maps.Marker({
    position: position,
    map: map,
    icon: {url: icon, labelOrigin: new google.maps.Point(30, -3), scaledSize: new google.maps.Size(24, 24)},
    label: label,
    // label: {color: 'blue', fontFamily: 'TimesNewRoman', fontSize: '20px', textlabel: label},
    // labelOrigin: new google.maps.Point(0, 50),
    labelClass: "labels" // the CSS class for the label
    // labelStyle: {opacity: 1}
  });


  marker.addListener('click', function(e) {
    marker.setIcon({url: './custom-files/check-done.svg', labelOrigin: new google.maps.Point(30, -3), scaledSize: new google.maps.Size(24, 24)});
    // 12 and -7 were the old values
    // console.log(e);
  });

}