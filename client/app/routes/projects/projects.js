'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/projects', {
        templateUrl: 'app/routes/projects/projects.html',
        controller: 'ProjectsCtrl'
      });
  });