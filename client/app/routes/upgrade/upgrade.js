'use strict';

angular.module('navajoAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/upgrade', {
        templateUrl: 'app/routes/upgrade/upgrade.html',
        controller: 'UpgradeCtrl'
      });
  });
