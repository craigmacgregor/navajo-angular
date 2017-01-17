'use strict';

angular.module('navcoinAngularApp')
  .controller('BlockCtrl', function ($scope, $http, $interval) {
       
        $scope.loading = true;

        try{
            document.domain = "navcoin.org";
        }catch(err){
            //console.log(err);
        }
        
        $interval(function(){
                        
             try{
                
                if(angular.element("#block-iframe")[0].contentWindow.document.body.scrollHeight !== $scope.iFrameHeight){
                    $scope.iFrameHeight = angular.element("#block-iframe")[0].contentWindow.document.body.scrollHeight + 'px';        
                    angular.element("#block-iframe").css('height', $scope.iFrameHeight);
                }
                
            }catch(err){
                //console.log(err);
            }
            
            
            
        },2000);
        
  
  }).directive('blockIframe', function () {
    return {
      link: function (scope, elm, attrs, ctrl) {
        
        scope.iFrameHeight = "500px";
        
        elm.on('load', function (event) {
            
            scope.$apply(function(){
                scope.loading = false;
            });
                                                            
            try{
                scope.iFrameHeight = elm[0].contentWindow.document.body.scrollHeight + 'px';           
            }catch(err){
                //console.log(err);
            }
            
            elm.css('height', scope.iFrameHeight);            
            
        });

      }
    };
  });
