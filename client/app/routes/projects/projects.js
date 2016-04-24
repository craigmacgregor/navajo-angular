'use strict';

angular.module('navajoAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/projects', {
        templateUrl: 'app/routes/projects/projects.html',
        controller: 'ProjectsCtrl'
      });
  });