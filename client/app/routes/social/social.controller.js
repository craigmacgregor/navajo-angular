'use strict';

angular.module('navajoAngularApp')
  .controller('SocialCtrl', function ($scope, $http, $window, $q) {
      
        $scope.loading = true;
      
    $http.get('/api/social.json').
        then(function(response) {

           $scope.data = response.data;
           $scope.loading = false;

        }, function(response) {
            //error
        });
  });
