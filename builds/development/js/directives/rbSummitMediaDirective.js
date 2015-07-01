



angular.module('app').directive('rbSummitMedia', function(){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/summit-media.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'logos';
      
      scope.isLoaded = false;
      
      scope.imageLoad = function(){
              scope.isLoaded = true;
        
      }

      
       scope.isLogos = function(){
         scope.isLoaded = false;
        scope.device = 'logos';
      };
      
      
      scope.isAdvertisement = function(){
        scope.isLoaded = false;
        scope.device = 'ad';
      };
      
      

     
    }
  }
});