'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/social', {
        templateUrl: 'app/routes/social/social.html',
        controller: 'SocialCtrl'
      });
  });