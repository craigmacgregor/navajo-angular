'use strict';

angular.module('navajoAngularApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
        {
            'title': 'Home',
            'link': '/'
        },
        {
            'title': 'News',
            'link': '/news'
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
                    'link': 'https://chainz.cryptoid.info/nav/',
                    'target': 'e'
                },
                {
                    'title': 'Rich List',
                    'link': 'https://chainz.cryptoid.info/nav/#!rich',
                    'target': 'e'
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
                },
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
