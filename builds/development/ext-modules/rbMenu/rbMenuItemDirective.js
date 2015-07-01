
angular.module('rbMenu').directive('rbMenuItem', function(){
  return{
    require: '^rbMenu',
    scope:{
      label: '@',
      icon: '@',
      route: '@'
    },
    templateUrl: 'ext-modules/rbMenu/rbMenuItemTemplate.html',
    link: function(scope, el, attr, ctrl){
      
      scope.isActive = function(){
        return el === ctrl.getActiveElement();
      };
      
      scope.isVertical = function(){
        return ctrl.isVertical() || el.parents('.subitem-section').length > 0;
      }
      
      el.on('click', function(evt){
        evt.stopPropagation();
        evt.preventDefault();
        scope.$apply(function(){
          ctrl.setActiveElement(el);
          ctrl.setRoute(scope.route, scope.label);
        });
      });
    }
  };
});