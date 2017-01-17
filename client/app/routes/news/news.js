'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/news', {
        templateUrl: 'app/routes/news/news.html',
        controller: 'NewsCtrl'
      })
      .when('/news/page/:page', {
        templateUrl: 'app/routes/news/news.html',
        controller: 'NewsCtrl'
      })
      .when('/news/articles/post/:item', {
        templateUrl: 'app/routes/news/news-item.html',
        controller: 'NewsItemCtrl'
      });
  });
