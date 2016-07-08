//FInal OOP Version of Google map example
var Map = function() {

      this.mapElement = "map";
      this.zoom = 8;
      this.center={
              lat: -34.397,
              lng: 150.644
      };
      this.address = "address";

      this.map = null;
};

Map.prototype.initMap = function(){
      this.map = new google.maps.Map(document.getElementById(this.mapElement), {
          zoom: this.zoom,
            center: this.center
      });
};

Map.prototype.searchAddress = function(){
        var geocoder = new google.maps.Geocoder();


       var address = document.getElementById(this.address).value;
       geocoder.geocode({  'address': address }, this.handleResults );
};

Map.prototype.handleResults = function(results){
  this.map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
      map: map,
      position: results[0].geometry.location
  });
}
