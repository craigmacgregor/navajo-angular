'use strict';

angular.module('navajoAngularApp')
  .controller('ProjectsCtrl', function ($scope, $http) {
   
   $scope.loading = true;
   
   $http.get('/api/projects.json').
    then(function(response) {
        
       $scope.projects = response.data;
       $scope.loading = false;
    }, function(response) {
        //error
    });

  });
 


