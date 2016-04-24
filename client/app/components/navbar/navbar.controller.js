'use strict';

angular.module('navajoAngularApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
        {
            'title': 'Home',
            'link': '/'
        },
        {
            'title': 'Projects',
            'link': '/projects'
        },
        {
            'title': 'Downloads',
            'link': '/downloads'
        },
        {
            'title': 'Exchanges',
            'link': '/exchanges'
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
                },
                {
                    'title': 'Market Cap',
                    'link': 'http://coinmarketcap.com/currencies/navajo',
                    'target': 'e'
                }
            ]
        },
        {
            'title': 'Community',
            'items' : [
                {
                    'title': 'Social Channels',
                    'link': '/social'
                },
                {
                    'title': 'Foundation',
                    'link': '/foundation'
                },
                {
                    'title': 'Contact',
                    'link': '/contact'
                }
            ]
        },
        {
            'title': 'Contribute',
            'items' : [
                {
                    'title': 'Bounty',
                    'link': '/bounty'
                },
                {
                    'title': 'Charity',
                    'link': '/charity'
                }
            ]
        }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
