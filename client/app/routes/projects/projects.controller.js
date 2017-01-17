'use strict';

angular.module('navcoinAngularApp')
  .controller('ProjectsCtrl', function ($scope, $http) {

   $scope.loading = true;

   Prismic.api("http://navcoin.prismic.io/api", function(error, api) {
     var options = { pageSize: 100, orderings: '[my.projects.percent desc]' };
     api.query(Prismic.Predicates.at('document.type', 'projects'), options, function(error, response) {
       if (error) {
       } else {
         $scope.projects = formatProjects(response.results);
       }
       $scope.loading = false;
       $scope.$apply();
     });
   });

   function formatProjects(results) {
     var formatted = {
       pending: [],
       inProgress: [],
       onHold: [],
       complete: [],
     };
     angular.forEach(results, function(result){
       var temp = {
         title: result.getText('projects.title'),
         description: result.getStructuredText('projects.description').asHtml(),
         status: result.getText('projects.status'),
         percent: result.getNumber('projects.percent-complete'),
         priority: result.getNumber('projects.priority'),
         dateCompleted: result.getDate('projects.date-completed'),
       }
       switch (temp.status) {
         case 'Pending':
           formatted.pending.push(temp);
           break;
         case 'In Progress':
           formatted.inProgress.push(temp);
           break;
         case 'On Hold':
            formatted.onHold.push(temp);
            break;
         case 'Complete':
            formatted.complete.push(temp);
            break;
       }
     });
     formatted.pending = _.orderBy(formatted.pending, 'priority', 'asc');
     formatted.inProgress = _.orderBy(formatted.inProgress, 'percent', 'asc');
     formatted.complete = _.orderBy(formatted.complete, 'dateCompleted', 'desc');
     return formatted;
   }

  });
