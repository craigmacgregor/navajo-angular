'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/bounty', {
        templateUrl: 'app/routes/bounty/bounty.html',
        controller: 'BountyCtrl'
      });
  });