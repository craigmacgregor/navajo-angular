'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/downloads', {
      templateUrl: 'app/routes/downloads/downloads.html',
      controller: 'DownloadsCtrl'
    });
  });
