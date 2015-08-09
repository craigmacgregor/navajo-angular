'use strict';

angular.module('navajoAngularApp')
  .controller('FooterCtrl', function ($scope, $location) {
  

    

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });