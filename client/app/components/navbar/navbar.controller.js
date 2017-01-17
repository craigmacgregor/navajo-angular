'use strict';

angular.module('navcoinAngularApp')
  .controller('NavbarCtrl', function ($scope, $location, $http) {
    $http.get('/api/navbar.json').
        then(function(response) {

         $scope.menu = response.data;
       });

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {

      var path = $location.path();

      if(route === '/news' && path.indexOf("/news/articles") !== -1) return true;

      var communityLinks = ['/social', '/foundation', '/contact', '/bounty', '/charity'];
      if(route === '/community' && communityLinks.indexOf(path) !== -1) return true;

      var toolsLinks = ['/faucet', '/guides', '/guides/full-node', '/guides/tor-network', '/guides/navtech-anon'];
      if(route === '/tools' && toolsLinks.indexOf(path) !== -1) return true;

      return route === $location.path();
    };
  });
