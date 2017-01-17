'use strict';

angular.module('navcoinAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode(true);
});
