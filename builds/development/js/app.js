angular.module('app', ['ngRoute', 'rbFramework'])


.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
})

.directive('imageonload', function($timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {

                element.bind('load', function() {
                    //call the function that was passed
                    scope.$apply(attrs.imageonload);

                });
            }
        };
    })

//.directive('preserveHeight', function($timeout, $window, $location) {
//        return {
//            restrict: 'A',
//            link: function(scope, element, attrs) {
//              
//              
//              var setHeight = function(){
//                  $timeout(function(){
//                    $('.image-not-loaded').css('height', $('.image-loaded').height());
//                    $('.image-viewer').css('max-height', $('.image-viewer').height());
//                  },1000);
//              }
//              
//              
//              var setImageViewerHeight = function(){
//                $('.image-viewer').css('max-height', $('.image-viewer').height());
//              }
//              
//               var prevNumber;
//               $($window).on('resize.preserveHeight', function(){
//                    var sameNumber;
//                    $('.image-loader').css('height', 'auto');
//                    setImageViewerHeight();
//                    setHeight();
//                    var checkNumber = $('.image-viewer').height();
//                    if(checkNumber === prevNumber){
//                      $('.image-viewer').css('max-height', '100%');
//                    };
//                    $timeout(function(){
//                      prevNumber = checkNumber;
//                    },10);
//                });
//              
//              
//                
//              
//              scope.$on('rb-menu-orientation-changed-event', function(evt, data){
//                    if(!data.isMenuVertical){
//                      $('.image-viewer').css('max-height', '130%');
//                    }else{
//                    
//                   $('.image-viewer').css('max-height', '100%');
//                    $('.image-loader').css('height', 'auto');
//                    console.log(data);
//                    setImageViewerHeight();
//                    setHeight();
//                    }
//              });
//              
//              scope.$on('$locationChangeSuccess', function(evt, data){
//                $timeout(function(){
//                setImageViewerHeight();
//                },1000)  
//              });
//              
//              
//              
//              $timeout(function(){
//              setHeight();
//              setImageViewerHeight();
//              },1000)
//
//            }
//        };
//    })



.directive("scroll", function ($window) {
    return{
    scope:true,
    link: function (scope, el, attrs) {
        function isElementInViewport (el) {

          //special bonus for those using jQuery
          if (typeof jQuery === "function" && el instanceof jQuery) {
              el = el[0];
          }
          var height = $(el).height();
          var rect = el.getBoundingClientRect();
          
          return (
              rect.top >= -(height / 1.25) &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)+ (height / 1.25) && /*or $(window).height() */
              rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
          );
          }

        angular.element($window).bind("scroll", function (e) {

           if (isElementInViewport(el)) {
               e.preventDefault();
               e.stopPropagation();
               el.removeClass('not-in-view');
               el.addClass('in-view');
           } else {
               e.preventDefault();
               e.stopPropagation();
               el.removeClass('in-view');
               el.addClass('not-in-view');
           }
          scope.$apply();
      });
          }
};
})
