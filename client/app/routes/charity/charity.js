'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/charity', {
        templateUrl: 'app/routes/charity/charity.html',
        controller: 'CharityCtrl'
      });
  });