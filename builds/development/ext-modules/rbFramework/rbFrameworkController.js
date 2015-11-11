
angular.module('rbFramework')
.controller('rbFrameworkController', function($scope, $rootScope, $window, $timeout, $location, $routeParams, $route){
      
    
    $scope.isMenuVisible = true;
    $scope.isMenuButtonVisible = true;
    $scope.isMenuVertical = true;
    $scope.allowHorizontalToggle = true;
    $scope.aboutActive = true;
    $scope.isMobile = true;
  
    $scope.$on('menu-item-selected-event', function(evt, data){
        $scope.routeString = data.route;
        $scope.routeTitle = data.title;
        $location.path(data.route);
        checkWidth();
        broadcastMenuState();
    });
    
    var viewLoaded = false;
    var url = $location.$$url;
  
    $scope.$on('$locationChangeSuccess', function(){
      viewLoaded = true;
      setMenuTop();
      determineViewWidth();
     $timeout(function(){ 
        if($location.$$url === '/about'){
          $scope.aboutActive = true;
        }else{
          $scope.aboutActive = undefined;
        }
      },10);  
      
      $timeout(function(){ 
        $('.menu-area-vertical').css('height', $('.view').height() + 40)
      },920);  
      
      
    });
    

    if(!viewLoaded){
        $route.reload();  
    }
    
    
  var setMenuTop = function(){
    $('rb-menu').css('top', $('.logo-area').height());
  }
  
    $scope.$on('rb-menu-orientation-changed-event', function(evt, data){
        $scope.isMenuVertical = data.isMenuVertical;
        $timeout(function(){ 
        determineViewWidth();
      },20);
        
    });
  
    $($window).on('resize.rbFramework', function(){
      $scope.$apply(function(){
        checkWidth();
        determineViewWidth();
        setMenuTop();
      });
    });
  
    
    $scope.$on('$destroy', function(){
      $($window).off('resize.rbFramework'); //remove the handler
    })
    
    var checkWidth = function(){
      var width = Math.max($($window).width(), $window.innerWidth);
      $scope.isMenuVisible = (width >= 768);
      $scope.isMenuButtonVisible = !$scope.isMenuVisible;
      $scope.isMobile = (width <= 460);
    };
  
    $scope.menuButtonClicked = function(){
      $scope.isMenuVisible = !$scope.isMenuVisible;
      broadcastMenuState();
    }
    

    
    var broadcastMenuState = function(){
      $rootScope.$broadcast('menu-show', 
        {
          show: $scope.isMenuVisible,
          isVertical: $scope.isMenuVertical,
          allowHorizontalToggle: !$scope.isMenuButtonVisible
        });
    }
    
    
     var determineViewWidth = function(){ 
       
      $timeout(function(){
        
        var menuWidth = ($('.menu-area-vertical').outerWidth() / $('body').width()) * 100;
        var viewWidth = 100;
        if(Math.max($($window).width(), $window.innerWidth) >= 768){
        $('.view').css('width', ((viewWidth - menuWidth) + '%'));
        }else{
        $('.view').css('width', ((viewWidth) + '%'));
        }
      },25);
      }

     $scope.$on('rb-menu-orientation-changed-event', function(evt, data){
      determineViewWidth();
    });
     
     determineViewWidth();
     
    $timeout(function(){
      checkWidth();
      determineViewWidth();
      broadcastMenuState();
    },0);
    
    $(function() {
    resizeImages();

    function resizeImages() {
       setTimeout(resizeImages,5000);
       $(window).trigger('resize');
    }
    });
  
  
});