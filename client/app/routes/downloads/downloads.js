'use strict';

angular.module('navajoAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/downloads', {
        templateUrl: 'app/routes/downloads/downloads.html',
        controller: 'DownloadsCtrl'
      });
  });