describe("oop google map", function(){
  var newMap

  beforeEach(function(){
      newMap = new Map();
  });

  it("should use default values" , function(){
    expect(newMap.center).toEqual({lat: -34.397, lng: 150.644});
    expect(newMap.zoom). toEqual(8);
    expect(newMap.address).toBe("address");
    expect(newMap.mapElement).toBe("map");
    expect(newMap.map).toBe(null);
    //expect(newMap.geocoder).toBe(null);

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
            newMap = new Map({});
            newMap.initMap();

        });

        it("should set the map to default", function(){

            // expect(newMap.map).not.toEqual(undefined);
            // expect(newMap.map.zoom).toEqual(8);
            // expect(newMap.center).toEqual({lat: -34.397, lng: 150.644});
            //
            expect(newMap.map).not.toBeNull();
        });
      });
      describe("search for the address entered and show on map", function(){
        beforeEach(function(){
            newMap = new Map({});


            window.google ={};
            window.google.maps= {};
            window.google.maps.LatLng = function(){};
            window.google.maps.Map = function(a,b){};
            window.google.maps.Geocoder = function() { return { geocode: function(a,b) {} } };

            newMap.initMap();
            // newMap.searchAddress();

        });

        it("assigns the address entered in geocode", function () {

            newMap.searchAddress();
            expect(newMap.searchAddress.geocoder).not.toBeNull();
            expect(newMap.setCenter).not.toEqual({lat: -34.397, lng: 150.644});
        })
      })

  });


});
