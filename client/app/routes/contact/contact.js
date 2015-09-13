'use strict';

angular.module('navajoAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: 'app/routes/contact/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/contact/:success', {
        templateUrl: 'app/routes/contact/contact.html',
        controller: 'ContactCtrl'
      });
  });