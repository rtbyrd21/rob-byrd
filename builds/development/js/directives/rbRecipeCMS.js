


angular.module('app').directive('rbRecipeCms', function(){
  return{
    scope:{
      image: '@',
      mobile: '='
    },
    templateUrl: 'js/directives/directiveTemplates/recipe-cms.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'main';
      scope.isLoaded = false;
      
      scope.imageLoad = function(){
            scope.isLoaded = true;
      }
      
      scope.isMain = function(){
        scope.isLoaded = false;
        scope.device = 'main';
      };
      
      scope.isCategories = function(){
        scope.isLoaded = false;
        scope.device = 'categories';
      };
      
    
      scope.isIngredients = function(){
        scope.isLoaded = false;
        scope.device = 'ingredients';
      };
      

    }
  }
});