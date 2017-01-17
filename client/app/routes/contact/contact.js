'use strict';

angular.module('navcoinAngularApp')
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