'use strict';

angular.module('navcoinAngularApp')
  .controller('NewsCtrl', function ($scope, $http, $q, $routeParams) {

    $scope.loading = true;
    $scope.error = false;

    Prismic.api("http://navcoin.prismic.io/api", function(error, api) {
      var options = { pageSize: 5, orderings: '[my.latest_articles.date desc]' };
      api.query(Prismic.Predicates.at('document.type', 'latest_articles'), options, function(error, response) {
        if (error) {
          $scope.error = true;
          console.log("Something went wrong: ", error);
        } else {
          $scope.articles = formatArticles(response.results);
        }
        $scope.$applyAsync();
      });
    });

    $scope.pageNumber = 1;
    var routePage = parseInt($routeParams.page)
    if ($routeParams.page && Number.isInteger(routePage)) $scope.pageNumber = routePage;

    var blogPromise = $http.get('http://cryptocereal.com/api/get_category_posts/?slug=navcoin&orderby=date&page=' + $scope.pageNumber);

    $q.all([blogPromise]).then(function(response) {
      console.log(response);
      $scope.posts = formatPosts(response[0].data.posts);
      $scope.numPosts = $scope.posts.length;
      $scope.numPages = response[0].data.pages;
      $scope.loading = false;
    }, function(response) {
        //error
        $scope.navError = true;
        $scope.navLoading = false;
    });

    $scope.iteratePages = function(numPages) {
      var pageNumbers = [];
      for (var i = 0; i < numPages; i++) {
        pageNumbers.push(i+1);
      }
      return pageNumbers;
    }

    function formatArticles(articles) {
      var formatted = [];
      angular.forEach(articles, function(article){
        formatted.push({
          title: article.getText('latest_articles.title'),
          date: article.getDate('latest_articles.date'),
          website: article.getText('latest_articles.website'),
          url: article.getLink('latest_articles.url').value.url,
        });
      });
      return formatted;
    };

      function formatPosts(posts) {
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
