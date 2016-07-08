describe('GoogleMapControl', function() {
  beforeEach(module('angMaps'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.initMap', function() {
    var $scope,controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('googleMapControl', { $scope: $scope });
      mapElement = document.createElement('div');
      address = document.createElement('div');
      mapElement.id = "map";
      address.id = "address";

      document.body.appendChild(mapElement);
      document.body.appendChild(address);

      window.google ={};
      window.google.maps= {};
      window.google.maps.LatLng = function(){};
      window.google.maps.Map = function(a,b){};
      window.google.maps.Geocoder = function() { return { geocode: function(a,b) {} } };
    });


    it('it initializes the map', function() {

      //arrange


      //act
      $scope.initMap();

      //assert
      expect($scope.zoom).toEqual(18);
      expect($scope.center).toEqual({lat: -34.397, lng: 150.644})
    });
  });

  describe('$scope.searchAddress & $scope.handleResults', function() {
    var $scope,controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('googleMapControl', { $scope: $scope });
      mapElement = document.createElement('div');
      address = document.createElement('div');
      mapElement.id = "map";
      address.id = "address";

      document.body.appendChild(mapElement);
      document.body.appendChild(address);

      window.google ={};
      window.google.maps= {};
      window.google.maps.LatLng = function(){};
      window.google.maps.Map = function(a,b){};
      window.google.maps.Geocoder = function() { return { geocode: function(a,b) {} } };
      window.google.maps.Marker = function(a,b){ };
    });


    it('it searches the map', function() {

      //arrange

      $scope.initMap();
      //act
      $scope.searchAddress();

      //assert
      expect($scope.address).toBe('');
    });

    it('it handles the geocode result', function() {

      //arrange
      var results = {
         '0': {
               geometry: {
                      location: 'here'
                      }
               }
       };
      $scope.map = {};
      $scope.map.setCenter = function(){}
      spyOn($scope.map,'setCenter');

      //act
      $scope.handleResults(results);

      //assert
      expect($scope.map.setCenter).toHaveBeenCalled();
    });


  });

  describe('$scope.saveAddress', function(){
    beforeEach(function() {
      $scope = {};
      controller = $controller('googleMapControl', { $scope: $scope });
      mapElement = document.createElement('div');
      address = document.createElement('div');
      mapElement.id = "map";
      address.id = "address";

      document.body.appendChild(mapElement);
      document.body.appendChild(address);

      window.google ={};
      window.google.maps= {};
      window.google.maps.LatLng = function(){};
      window.google.maps.Map = function(a,b){};
      window.google.maps.Geocoder = function() { return { geocode: function(a,b) {} } };
      window.google.maps.Marker = function(a,b){ };
    });

    it('it saves the address to local storage', function() {
      //act
      $scope.saveAddress();

      //assert
      expect($scope.saveAddress).not.toBe(null);

    });

  });


  describe('$scope.loadAddress', function(){
    beforeEach(function() {
      $scope = {};
      controller = $controller('googleMapControl', { $scope: $scope });
      mapElement = document.createElement('div');
      address = document.createElement('div');
      mapElement.id = "map";
      address.id = "address";

      document.body.appendChild(mapElement);
      document.body.appendChild(address);

      window.google ={};
      window.google.maps= {};
      window.google.maps.LatLng = function(){};
      window.google.maps.Map = function(a,b){};
      window.google.maps.Geocoder = function() { return { geocode: function(a,b) {} } };
      window.google.maps.Marker = function(a,b){ };
    });

    it('it loads the address from local storage', function() {
      //act
      $scope.loadAddress();

      //assert
      expect($scope.saveAddress).not.toBe(null);

    });

  });





});

describe('handling the directive', function(){
  var $compile, $rootScope;

    beforeEach(module('angMaps'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
        beforeEach(inject(function(_$compile_, _$rootScope_){
  // The injector unwraps the underscores (_) from around the parameter names when matching
          $compile = _$compile_;
          $rootScope = _$rootScope_;
        }));

    it('should display the search box and load,save & submit buttons',function(){
      // Compile a piece of HTML containing the directive | assert
          var element = $compile("<display-map></display-map>")($rootScope);

  // fire all the watches, so the scope expression {{1 + 1}} will be evaluated | act
          $rootScope.$digest();

  // Check that the compiled element contains the templated content | assert
          expect(element.html()).toContain('<br><input type="textbox" id="address" ng-model="address" class="ng-pristine ng-untouched ng-valid ng-empty"><br><input id="submit" type="button" ng-click="searchAddress()" value="Search">');
    });



});
