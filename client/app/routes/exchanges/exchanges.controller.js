'use strict';

angular.module('navajoAngularApp')
  .controller('ExchangesCtrl', function ($scope, $http, $window, $q) {
      
        $scope.loading = true;
      
    $http.get('/api/exchanges.json').
        then(function(response) {

           $scope.data = response.data;
           $scope.loading = false;

        }, function(response) {
            //error
        });
  });
