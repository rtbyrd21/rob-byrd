
angular.module('rbMenu').controller('rbMenuController', 
function($scope, $rootScope, $location, $window, $timeout){
  
    var width = Math.max($($window).width(), $window.innerWidth);
    
    
    $scope.openMenuScope = null;
    $scope.isVertical = true;
  
  
    
//     if(width >= 768){
//      $scope.showMenu = true;
//     }else{
//       $scope.showMenu = false; 
//     };
  
    this.getActiveElement = function(){
        return $scope.activeElement;
    };
  
    
  
    this.setActiveElement = function(el){
        $scope.activeElement = el;
        
    };   
  
    this.isVertical = function(){
        return $scope.isVertical;
    }
    
    this.setRoute = function(route, label){
        $rootScope.$broadcast('menu-item-selected-event',
              {route: route,
              title: label});
    };
  
  
    this.setOpenMenuScope = function(scope){
        $scope.openMenuScope = scope;
    }
  
    $scope.toggleMenuOrientation = function(){
        
        if($scope.openMenuScope){
            $scope.openMenuScope.closeMenu();
        }
        
        $scope.isVertical = !$scope.isVertical;
        $rootScope.$broadcast('rb-menu-orientation-changed-event',
              {isMenuVertical: $scope.isVertical});
    };
  
    angular.element(document).bind('click', function(e){
      if($scope.openMenuScope && !$scope.isVertical){
        if($(e.target).parent().hasClass('selectable-item')){
          return;
        }
        $scope.$apply(function(){
          $scope.openMenuScope.closeMenu();
        });
        e.preventDefault();
        e.stopPropagation();
      }
    });
  
    $scope.$on('menu-show', function(evt, data){
      $scope.showMenu = data.show;
      $scope.isVertical = data.isVertical;
      $scope.allowHorizontalToggle = data.allowHorizontalToggle;
     
    });
  

  
});