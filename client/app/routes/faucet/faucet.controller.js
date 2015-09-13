'use strict';

angular.module('navajoAngularApp')
  .controller('FaucetCtrl', function ($scope, $http, $interval) {
                
        try{
            document.domain = "navajocoin.org";
        }catch(err){
            //console.log(err);
        }
        
        $interval(function(){
                        
             try{
                if(angular.element("#faucet-iframe")[0].contentWindow.document.body.scrollHeight !== $scope.iFrameHeight){
                    $scope.iFrameHeight = angular.element("#faucet-iframe")[0].contentWindow.document.body.scrollHeight + 'px';  
                    angular.element("#faucet-iframe").css('height', $scope.iFrameHeight);
                }
                
            }catch(err){
                //console.log(err);
            }
            
            
        },2000);
        
  
  }).directive('faucetIframe', function () {
    return {
      link: function (scope, elm, attrs, ctrl) {
        
        scope.iFrameHeight = "500px";
        
        elm.on('load', function (event) {
                                                            
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
