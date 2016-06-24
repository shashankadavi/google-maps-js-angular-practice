var angMaps = angular.module('angMaps',[]);
angMaps.controller('googleMapControl', function ($scope){
        $scope.mapElement = "map";
        $scope.zoom = 8;
        $scope.center = {
              lat: -34.397,
              lng: 150.644
            }
        $scope.address ="Columbus, OH";

        $scope.initMap = function(){
            $scope.map = new google.maps.Map(document.getElementById($scope.mapElement),{
            zoom: $scope.zoom,
            center: $scope.center

          });
        }
        $scope.searchAddress = function(){
              var geocoder = new google.maps.Geocoder();
              var map = $scope.map;

              var address = $scope.address;

              geocoder.geocode({  'address': address }, function(results, status) {

                  map.setCenter(results[0].geometry.location);
                      var marker = new google.maps.Marker({
                      map: map,
                      position: results[0].geometry.location
                  });

              });

        }




})

var Map = function() {

      this.mapElement = "map";
      this.zoom = 8;
      this.center={
              lat: -34.397,
              lng: 150.644
      };
      this.address = "address";

      this.map = null;
      // this.geocoder = null;
};

Map.prototype.initMap = function(){
      this.map = new google.maps.Map(document.getElementById(this.mapElement), {
          zoom: this.zoom,
            center: this.center
      });
      // console.log("hello");
};

Map.prototype.searchAddress = function(){
       var geocoder = new google.maps.Geocoder();
       var map = this.map;

       var address = document.getElementById(this.address).value;

       geocoder.geocode({  'address': address }, function(results, status) {

           map.setCenter(results[0].geometry.location);
               var marker = new google.maps.Marker({
               map: map,
               position: results[0].geometry.location
           });

       });
}
