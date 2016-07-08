var angMaps = angular.module('angMaps',[]);

var page ='<br/>\
<input type="textbox" id="address" ng-model ="address" >\
<br/>\
<input id="submit" type="button" ng-click="searchAddress()" value="Search">';


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

              geocoder.geocode({  'address': address }, $scope.handleResults );

        }
        $scope.handleResults= function(results){
          $scope.map.setCenter(results[0].geometry.location);
              var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
          });
        }




});

angMaps.directive('displayMap', function(){

  return{

            template: page
  };
});
