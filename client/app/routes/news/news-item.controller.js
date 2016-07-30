'use strict';

angular.module('navajoAngularApp')
  .controller('NewsItemCtrl', function ($scope, $http, $routeParams, $q) {

    var newsItem = $routeParams.item;

    $scope.loading = true;
    $scope.error = false;

    var articlesPromise = $http.get('/api/articles.json');
    var blogPromise = $http.get('http://cryptocereal.com/api/get_post/?slug=' + newsItem);

    $q.all([articlesPromise, blogPromise]).then(function(response) {
      $scope.articles = response[0].data;
      $scope.data = $scope.formatData(response[1].data);
      $scope.loading = false;
    }, function(response) {
        //error
        console.log(response);
        $scope.navError = true;
        $scope.navLoading = false;
    });

      $scope.formatData = function(data) {
        var formatted = {
          post: $scope.formatPost(data.post),
        };

        return formatted;
      };

      $scope.formatPost = function(post) {
        var formatted = {
          title: post.title,
          excerpt: post.excerpt,
          content: post.content.replace('<a href="http://cryptocereal.com/', '<a href="/news/article/'),
          author: post.author.first_name + ' ' + post.author.last_name,
          attachments: post.attachments,
          slug: post.slug,
          date: post.date.replace(' ', 'T')
        };

        return formatted;
      };

  });
