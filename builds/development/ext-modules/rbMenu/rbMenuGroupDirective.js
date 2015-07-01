
angular.module('rbMenu').directive('rbMenuGroup', function(){
  return{
      require: '^rbMenu',
      transclude: true,
      scope:{
        label: '@',
        icon: '@',
        route: '@'
      },
      templateUrl: 'ext-modules/rbMenu/rbMenuGroupTemplate.html',
      link: function(scope, el, attrs, ctrl){
        
          isVertical = true;
          
          scope.isOpen = false;
        
          scope.closeMenu = function(){
            scope.isOpen = false;
          };
        
        
          scope.$on('rb-menu-orientation-changed-event', function(evt, data){
            isVertical = data.isMenuVertical;
          });
        
        
          scope.clicked = function(){
            
            scope.isOpen = !scope.isOpen;
            
            
            
            if(!isVertical){
            if(this.$$nextSibling){
            if(this.$$nextSibling.isOpen){
              this.$$nextSibling.isOpen = false;
              this.isOpen = true;
            };
            };
            if(this.$$prevSibling){
            if(this.$$prevSibling.isOpen){
              this.$$prevSibling.isOpen = false;
              this.isOpen = true;
            };
            };
            }
            
            if(el.parents('.subitem-section').length == 0){
                scope.setSubmenuPosition();
            }
            
            ctrl.setOpenMenuScope(scope);
            
          };
        
          scope.isVertical = function(){
            return ctrl.isVertical() || el.parents('.subitem-section').length > 0;
          }
          
          scope.setSubmenuPosition = function(){
            var pos = el.offset();
            $('.subitem-section').css({'left':pos.left + 20, 'top':36});
          };
        
        
        
      }
  }
});