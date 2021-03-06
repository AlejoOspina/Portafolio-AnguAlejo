(function () {
    'use strict';

    angular.module('app.inicio.router', [

    ])
        .config(configure);
    
    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('inicio', {
                url: '/',
                views: {
                    'inicio': {
                        template: '<inicio/>'
                    },
                    'piepagina': {
                        template: '<piepagina/>'
                        
                        
                    },'login': {
                        template: '<login/>'
                    },


                    'encabezado': {
                        template: '<encabezado/>'
                    },
                    
                }
            });
    };
})();