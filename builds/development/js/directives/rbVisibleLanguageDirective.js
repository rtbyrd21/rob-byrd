


angular.module('app').directive('rbVisibleLanguage', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/visiblelanguage.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'issue';
      scope.isLoaded = false;
      
      scope.imageLoad = function(){
              scope.isLoaded = true;
        
      }
      scope.isIssue = function(){
        scope.isLoaded = false;
        scope.device = 'issue';
      };
      
       scope.isArticle = function(){
        scope.isLoaded = false;
        scope.device = 'article';
      };
        
        scope.isSearch = function(){
        scope.isLoaded = false;
        scope.device = 'search';
      };
     
    }
  }
});