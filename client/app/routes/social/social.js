'use strict';

angular.module('navajoAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/social', {
        templateUrl: 'app/routes/social/social.html',
        controller: 'SocialCtrl'
      });
  });