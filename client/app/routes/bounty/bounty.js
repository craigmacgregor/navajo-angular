'use strict';

angular.module('navajoAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/bounty', {
        templateUrl: 'app/routes/bounty/bounty.html',
        controller: 'BountyCtrl'
      });
  });