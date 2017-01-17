'use strict';

angular.module('navcoinAngularApp')
  .controller('NewsItemCtrl', function ($scope, $http, $routeParams, $q) {

    var newsItem = $routeParams.item;

    $scope.loading = true;
    $scope.error = false;

    Prismic.api("http://navcoin.prismic.io/api", function(error, api) {
      var options = { pageSize: 5, orderings: '[my.latest_articles.date desc]' };
      api.query(Prismic.Predicates.at('document.type', 'latest_articles'), options, function(error, response) {
        if (error) {
          $scope.error = true;
        } else {
          $scope.articles = formatArticles(response.results);
        }
        $scope.$applyAsync();
      });
    });

    var blogPromise = $http.get('http://cryptocereal.com/api/get_post/?slug=' + newsItem);

    $q.all([blogPromise]).then(function(response) {
      $scope.data = formatData(response[0].data);
      $scope.loading = false;
    }, function(response) {
        //error
        $scope.navError = true;
        $scope.navLoading = false;
    });

    function formatData(data) {
      var formatted = {
        post: formatPost(data.post),
      };

      return formatted;
    };

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

    function formatPost(post) {
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
