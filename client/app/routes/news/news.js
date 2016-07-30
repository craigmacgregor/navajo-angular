'use strict';

angular.module('navajoAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/news', {
        templateUrl: 'app/routes/news/news.html',
        controller: 'NewsCtrl'
      })
      .when('/news/article/:item', {
        templateUrl: 'app/routes/news/news-item.html',
        controller: 'NewsItemCtrl'
      });
  });
