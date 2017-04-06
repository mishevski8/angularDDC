'use strict';
angular.module('angularDdcApp').controller('RegisterCtrl', function($http, authService, $location) {
    //
    var vm = this;
    vm.registration = {
        "role": "",
        "first_name": "", //*required if role = private*/ 
        "last_name": "", //*required if role = private*/
        "email": "",
        "password": "",
        "password_confirmation": ""
    }
    vm.register = function(registration) {
        authService.saveRegistration(vm.registration).then(onSuccess, onError);

        function onSuccess(response) {
            console.log(response);
            /*   $scope.message = 'We sent you a confirmation mail!';*/
        }

        function onError(response) {
            console.log(response);
            /*var errors = [];
            for (var key in response.data.errors) {
                console.log(response.data.errors[key]);
                for (var i = 0; i < response.data.errors[key].length; i++) {
                    errors.push(response.data.errors[key][i]);
                }
            }
            $scope.message = "Failed to register user due to:" + errors.join(' ');*/
        }
    }
});