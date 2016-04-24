'use strict';

angular.module('navajoAngularApp')
  .controller('FoundationCtrl', function ($scope, $http) {
    
    $scope.loading = true;
    
    $http.get('/api/foundation.json').
        then(function(response) {
            
           $scope.foundation = response.data;
           $scope.loading = false;
        }, function(response) {
            //error
        });

  });
