(function () {
    'use strict';

    angular.module('app.login.router', [

    ])
        .config(configure);
    
    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    'login': {
                        template: '<login/>'
                    },
                    'piepagina': {
                        template: '<piepagina/>'
                        
                        
                    },
                    'encabezado': {
                        template: '</>'
                    }
                }
            });
    };
})();