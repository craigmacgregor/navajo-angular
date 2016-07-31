'use strict';

angular.module('navajoAngularApp')
  .controller('NewsCtrl', function ($scope, $http, $q) {

    $scope.loading = true;
    $scope.error = false;

    var articlesPromise = $http.get('/api/articles.json');
    var blogPromise = $http.get('http://cryptocereal.com/api/get_category_posts/?slug=navcoin&orderby=date');

    $q.all([articlesPromise, blogPromise]).then(function(response) {
      $scope.articles = response[0].data;
      $scope.posts = $scope.formatPosts(response[1].data.posts);
      $scope.loading = false;
    }, function(response) {
        //error
        console.log(response);
        $scope.navError = true;
        $scope.navLoading = false;
    });

      $scope.formatPosts = function(posts) {
        var formatted = [];
        angular.forEach(posts, function(post){
          formatted.push({
            title: post.title,
            excerpt: post.excerpt,
            content: post.content.replace('<a href="http://cryptocereal.com/', '<a href="/news/articles/post/'),
            author: post.author.first_name + ' ' + post.author.last_name,
            attachments: post.attachments,
            slug: post.slug,
            date: post.date.replace(' ', 'T')
          });
        });

        return formatted;
      };
  });
