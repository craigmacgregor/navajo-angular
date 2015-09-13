'use strict';

angular.module('navajoAngularApp')
  .controller('FoundationCtrl', function ($scope, $http) {
      
    $http.get('/api/foundation.json').
        then(function(response) {

           $scope.foundation = response.data;

        }, function(response) {
            //error
        });

  });
