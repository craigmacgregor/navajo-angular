'use strict';

angular.module('navajoAngularApp')
  .controller('ProjectsCtrl', function ($scope, $http) {
   
   
   $http.get('/api/projects.json').
    then(function(response) {
        
       $scope.projects = response.data;
       
    }, function(response) {
        //error
    });

  });
 


