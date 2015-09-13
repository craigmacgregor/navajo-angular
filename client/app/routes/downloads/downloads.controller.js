'use strict';

angular.module('navajoAngularApp')
  .controller('DownloadsCtrl', function ($scope, $http) {
   
      
    $http.get('/api/downloads.json').
        then(function(response) {

           $scope.downloads = response.data;

        }, function(response) {
            //error
        });
        
  });
