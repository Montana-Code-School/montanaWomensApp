<!DOCTYPE html>
<html>
  <head>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://unpkg.com/react@latest/dist/react.js"></script>
      <script src="https://unpkg.com/react-dom@latest/dist/react-dom.js"></script>
      <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <link type="text/css" rel="stylesheet" href="css/style.css" />
    <title>Mt Women/Local Doctors</title>
  </head>
  <body>
      <div id="container"></div>

      <script type="text/babel">

      function Navbar(prop){
        var navStyle = {
          backgroundColor: "rgba(143, 57, 133, .8)",
          listStyle: "none",
          fontWeight: "700",

        }
        var noBull = {
          listStyle: "none",
          fontSize: "1em",
          backgroundColor: "#8f3985 !important"
        }

        return(
          <div style={navStyle}className="navbar navbar-default">
            <div className="navbar-header">
              <ul className="navbar-nav">
                <li style = {noBull} className="active"><a href="/index.html">HOME</a></li>
              </ul>
            </div>
          </div>
        );
      }

    function Header() {
      var headerStyle = {
        textAlign: "center"
      }
      return(
        <div className="jumbotron" style={headerStyle}>
          <h1> Doctors and Clinics in Missoula </h1>
        </div>
      );
    }

    function App() {
      return(
        <div>
          <Navbar/>
          <Header/>
        </div>
      );
    }

    ReactDOM.render(
      <App />,
    document.getElementById('container')
  );

  </script>


    <div id="map"></div>
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>



      <script>

       var map;
       var infowindow;

       function initMap() {


         var missoula = {lat: 46.878178, lng: -114.001003};

         map = new google.maps.Map(document.getElementById('map'), {
           center: missoula,
           zoom: 12,
           scrollwheel: false

         });



         infowindow = new google.maps.InfoWindow();
         var service = new google.maps.places.PlacesService(map);
         service.nearbySearch({
           location: missoula,
           radius: 5000,
           type: ['doctor']
         }, callback);
       }

       function callback(results, status) {
         if (status === google.maps.places.PlacesServiceStatus.OK) {
           for (var i = 0; i < results.length; i++) {
             createMarker(results[i]);
           }
         }
       }

       function createMarker(place) {
         var placeLoc = place.geometry.location;
         var marker = new google.maps.Marker({
           map: map,
           position: place.geometry.location
         });

         google.maps.event.addListener(marker, 'click', function() {
           infowindow.setContent(place.name);
           infowindow.open(map, this);
         });
       }

      // </script>
       <script async defer
      // src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDiIK5Y8YpXKY5_aVv5noyqmPRspT160JE&callback=initMap&libraries=places">
      //
      // </script>



  </body>
</html>
