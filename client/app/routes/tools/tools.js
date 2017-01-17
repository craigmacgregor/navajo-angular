'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tools', {
        templateUrl: 'app/routes/tools/tools.html',
        controller: 'ToolsCtrl'
      });
  });
