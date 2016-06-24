var angMaps = angular.module('angMaps',[]);


angMaps.controller('googleMapControl', function ($scope){
        $scope.mapElement = "map";
        $scope.zoom = 18;
        $scope.center = {
              lat: -34.397,
              lng: 150.644
            }
        $scope.address ="";
        $scope.saved = localStorage.getItem('locations');
        $scope.locations = (localStorage.getItem('locations')!==null) ?
              JSON.parse($scope.saved) : [ {text: 'Columbus, OH'}, {text: 'Westerville, OH'} ];
        localStorage.setItem('locations', JSON.stringify($scope.locations));

        $scope.initMap = function(){
            $scope.map = new google.maps.Map(document.getElementById($scope.mapElement),{
            zoom: $scope.zoom,
            center: $scope.center

          });
        };

        $scope.saveAddress= function(){
            // $scope.locations.push({
            //      text: $scope.address
            //  });
            localStorage.setItem('locations', JSON.stringify($scope.address));
            // localStorage.setItem('locations', JSON.stringify($scope.locations));
        };

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

        };

        $scope.searchThisAddress = function(loadThisAddress){
              var geocoder = new google.maps.Geocoder();
              var map = $scope.map;

              var address = loadThisAddress;

              geocoder.geocode({  'address': address }, function(results, status) {

                  map.setCenter(results[0].geometry.location);
                      var marker = new google.maps.Marker({
                      map: map,
                      position: results[0].geometry.location
                  });

              });

        };

        $scope.loadAddress = function(){

          $scope.loadThisAddress = localStorage.getItem('locations');
          $scope.searchThisAddress($scope.loadThisAddress);
        }




});

angMaps.directive('displayMap', function(){

  return{

              templateUrl: "../angular-local-storage/template/googleMapDir.html"
  };
});
