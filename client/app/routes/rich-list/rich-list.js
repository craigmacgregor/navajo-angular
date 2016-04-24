'use strict';

angular.module('navajoAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/rich-list', {
        templateUrl: 'app/routes/rich-list/rich-list.html',
        controller: 'RichListCtrl'
      });
  });