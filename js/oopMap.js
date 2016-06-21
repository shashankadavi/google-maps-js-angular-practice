var Map = function(){


    this.initMap= function(){

        this.map = new google.maps.Map(document.getElementById("map"),  {
          zoom: 8,
          center: {lat: -34.397, lng: 150.644}
        });

    }
    //need to call
    //searchAddress(geocoder,map);
    this.searchAddress= function(){
       var geocoder = new google.maps.Geocoder();
       var map = this.map;

       var address = document.getElementById("address").value;
       geocoder.geocode({'address': address}, function(results, status) {

          map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });

       });
    }
}
