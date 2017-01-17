'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/foundation', {
        templateUrl: 'app/routes/foundation/foundation.html',
        controller: 'FoundationCtrl'
      });
  });