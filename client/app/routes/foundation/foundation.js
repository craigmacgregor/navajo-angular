'use strict';

angular.module('navajoAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/foundation', {
        templateUrl: 'app/routes/foundation/foundation.html',
        controller: 'FoundationCtrl'
      });
  });