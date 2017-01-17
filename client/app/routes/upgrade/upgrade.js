'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/upgrade', {
        templateUrl: 'app/routes/upgrade/upgrade.html',
        controller: 'UpgradeCtrl'
      });
  });
