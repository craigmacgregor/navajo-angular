'use strict';

angular.module('navcoinAngularApp')
  .controller('FooterCtrl', function ($scope, $location) {
  

    

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });