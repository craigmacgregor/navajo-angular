'use strict';

angular.module('navajoAngularApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
        {
            'title': 'Home',
            'link': '/'
        },
        {
            'title': 'Downloads',
            'link': '/downloads'
        },
        {
            'title': 'Tools',
            'items' : [
                {
                    'title': 'Block Explorer',
                    'link': '/block-explorer'
                },
                {
                    'title': 'Rich List',
                    'link': '/rich-list'
                },
                {
                    'title': 'Faucet',
                    'link': '/faucet'
                }
            ]
        },
        {
            'title': 'Projects',
            'link': '/projects'
        },
        {
            'title': 'Foundation',
            'link': '/foundation'
        },
        {
            'title': 'Contact',
            'link': '/contact'
        }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });