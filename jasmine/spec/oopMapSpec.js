describe("oop google map", function(){
  var newMap

  beforeEach(function(){
      newMap = new Map();
  });

  it("should use default values" , function(){
    //arrange

    //act

    //assert
    expect(newMap.center).toEqual({lat: -34.397, lng: 150.644});
    expect(newMap.zoom). toEqual(8);
    expect(newMap.address).toBe("address");
    expect(newMap.mapElement).toBe("map");
    expect(newMap.map).toBe(null);

  });

  describe("Before initialization", function() {
      var map,address;

      beforeEach(function() {
          mapElement = document.createElement('div');
          address = document.createElement('div');
          mapElement.id = "map";
          address.id = "address";

          document.body.appendChild(mapElement);
          document.body.appendChild(address);

      });

      describe("initMap sets the map correctly",function(){

        beforeEach(function(){

            window.google ={};
            window.google.maps= {};
            window.google.maps.LatLng = function(){};
            window.google.maps.Map = function(a,b){};
            window.google.maps.Geocoder = function() { return { geocode: function(a,b) {} } };


        });

        it("should set the map to default", function(){
            //arrange
              newMap = new Map();
            //act
              newMap.initMap();
            //assert

             expect(newMap.zoom).toEqual(8);
             expect(newMap.center).toEqual({lat: -34.397, lng: 150.644});


        });
      });
      describe("search for the address entered and show on map", function(){
        beforeEach(function(){

            address = document.createElement('div');

            address.id = "address";

            document.body.appendChild(address);



            window.google ={};
            window.google.maps= {};
            window.google.maps.LatLng = function(){};
            window.google.maps.Map = function(a,b){  };
            window.google.maps.Geocoder = function() { return { geocode: function(a) { } } };
            window.google.maps.Marker = function(a,b){ };

            window.google.maps.Map.setCenter = function(o){ };

        });

        it("searches the address entered in geocode", function () {
          //arrange
            var newMap = new Map();
            newMap.initMap();

          //act
            newMap.searchAddress();

          //assert
            expect(newMap.map).not.toBe(null);
            expect(newMap.address).toBe("address");
            //expect(newMap.searchAddress.geocoder).not.toBeNull();
            //expect(newMap.setCenter).not.toEqual({lat: -34.397, lng: 150.644});


        })

        it("sets the result as the map center",function() {

          //arrange
          var results = {
             '0': {
                   geometry: {
                          location: 'here'
                          }
                   }
           };
           var testMap = new Map();
           testMap.map = {};
           testMap.map.setCenter = function(){
           }
           spyOn(testMap.map,'setCenter');

          //act
          testMap.handleResults(results);

          //assert
          expect(testMap.map.setCenter).toHaveBeenCalled();

        })
      })

  });


});
