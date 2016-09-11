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
            'link': '/tools',
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
                    'link': 'http://coinmarketcap.com/currencies/nav-coin',
                    'target': 'e'
                },
                {
                    'title': 'Guides',
                    'link': '/guides'
                },
            ]
        },
        {
            'title': 'Community',
            'link': '/community',
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

      var path = $location.path();

      if(route === '/news' && path.indexOf("/news/articles") !== -1) return true;

      var communityLinks = ['/social', '/foundation', '/contact', '/bounty', '/charity'];
      if(route === '/community' && communityLinks.indexOf(path) !== -1) return true;

      var toolsLinks = ['/faucet'];
      if(route === '/tools' && toolsLinks.indexOf(path) !== -1) return true;

      return route === $location.path();
    };
  });
