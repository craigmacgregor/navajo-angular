'use strict';

angular.module('navajoAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/charity', {
        templateUrl: 'app/routes/charity/charity.html',
        controller: 'CharityCtrl'
      });
  });