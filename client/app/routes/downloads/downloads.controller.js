'use strict';

angular.module('navajoAngularApp')
  .controller('DownloadsCtrl', function ($scope, $http) {
   
    $scope.loading = true;
      
    $http.get('/api/downloads.json').
        then(function(response) {

           $scope.downloads = response.data;
           $scope.loading = false;

        }, function(response) {
            //error
        });
        
  });
