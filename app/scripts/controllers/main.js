'use strict';
/**
 * @ngdoc function
 * @name angularDdcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDdcApp
 */
var app = angular.module('angularDdcApp').controller('MainCtrl', function() {
    angular.element(function() {
        new CBPFWTabs(document.getElementById('tabs'));
        /*var search = document.getElementById('search-car');
        var options = {
            types: ['(cities)']
        }
        var autocomplete = new google.maps.places.Autocomplete(search, options);
        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            fillInLatLng();
        });

        function fillInLatLng() {
            var place = autocomplete.getPlace();
            document.getElementById('lat').innerHTML(place.geometry.location.lat());
            document.getElementById('lng').innerHTML(place.geometry.location.lng());
        }*/
    });
});
app.directive('directivename', function() {
    return {
        restrict: 'AEC',
        link: function(scope, element, attrs) {
            angular.element(element).myPlugin(scope.$eval(attrs.directiveName));
        }
    };
});