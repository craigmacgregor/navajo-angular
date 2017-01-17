'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/guides', {
        templateUrl: 'app/routes/guides/guides.html',
        controller: 'GuidesCtrl'
      }).when('/guides/:guide', {
        templateUrl: 'app/routes/guides/guides.html',
        controller: 'GuidesCtrl'
      });
  });
