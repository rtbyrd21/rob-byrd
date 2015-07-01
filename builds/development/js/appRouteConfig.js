
angular.module('app').config(function($routeProvider, $locationProvider){
  var routes = [
    {
      url: '/healing-center',
      config: {
        template: '<rb-healing-center image="healing-center"></rb-healing-center>'
      }
    },
    {
      url: '/nigeria',
      config: {
        template: '<rb-nigeria mobile="isMobile"></rb-nigeria>'
      }
    },
    {
      url: '/smallthings',
      config: {
        template: '<rb-small-things></rb-small-things>'
      }
    },
    {
      url: '/vineyard-blog',
      config: {
        template: '<rb-vin-blog></rb-vin-blog>'
      }
    },
    {
      url: '/visible-language',
      config: {
        template: '<rb-visible-language></rb-visible-language>'
      }
    },
    {
      url: '/illumination-site',
      config: {
        template: '<rb-illumination-site></rb-illumination-site>'
      }
    },
    {
      url: '/about',
      config: {
        template: '<rb-about></rb-about>'
      }
    },
    {
      url: '/tempo-vices',
      config: {
        template: '<rb-tempo-vices></rb-tempo-vices>'
      }
    },
    {
      url: '/tempo-future',
      config: {
        template: '<rb-tempo-future></rb-tempo-future>'
      }
    },
    {
      url: '/tempo-generation',
      config: {
        template: '<rb-tempo-generation></rb-tempo-generation>'
      }
    },
    {
      url: '/coffey-communications',
      config: {
        template: '<rb-coffey-communications></rb-coffey-communications>'
      }
    },
    {
      url: '/summit-media',
      config: {
        template: '<rb-summit-media></rb-summit-media>'
      }
    },
    {
      url: '/esh',
      config: {
        template: '<rb-esh></rb-esh>'
      }
    },
    {
      url: '/letterpress',
      config: {
        template: '<rb-letterpress></rb-letterpress>'
      }
    },
    {
      url: '/artwork',
      config: {
        template: '<rb-artwork></rb-artwork>'
      }
    },
    {
      url: '/',
      config: {
        template: '<rb-about></rb-about>'
      }
    }
  ];
  $locationProvider.html5Mode(true);
  

    routes.forEach(function(route){
      $routeProvider.when(route.url, route.config);
    });

  
 
  
  $routeProvider.otherwise({redirectTo: '/'});
});

