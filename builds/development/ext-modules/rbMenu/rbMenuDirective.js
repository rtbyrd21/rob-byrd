angular.module('rbMenu').directive('rbMenu', function($timeout, $window){
  return{
    scope:{
      
    },
    transclude: true,
    templateUrl: 'ext-modules/rbMenu/rbMenuTemplate.html',
    controller: 'rbMenuController',
    link: function(scope, el, attr){
      
        var width = Math.max($($window).width(), $window.innerWidth);
      
        var item = el.find('.selectable-item:first');
        $timeout(function(){
          item.trigger('click');
        }, 0);
      
        
    }
  };
});