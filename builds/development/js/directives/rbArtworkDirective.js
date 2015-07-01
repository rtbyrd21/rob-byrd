


angular.module('app').directive('rbArtwork', function(){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/artwork.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'charcoal';
      scope.isLoaded = false;
      
      scope.imageLoad = function(){
              scope.isLoaded = true;
        
      }
      
      
       scope.isCharcoal = function(){
         scope.isLoaded = false;
        scope.device = 'charcoal';
      };
      
      scope.isCharcoalTwo = function(){
        scope.isLoaded = false;
        scope.device = 'charcoal-two';
      };
      
      scope.isOil = function(){
        scope.isLoaded = false;
        scope.device = 'oil';
      };
      
      
      scope.isPrint = function(){
        scope.isLoaded = false;
        scope.device = 'print';
      };
      

     
    }
  }
});