(function () {
    'use strict';

    angular.module('app.formulario.router', [

    ])
        .config(configure);
    
    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('formulario', {
                url: '/formulario',
                views: {
                    'formulario': {
                        template: '<formulario/>'
                    },
                    'piepagina': {
                        template: '<piepagina/>'
                        
                        
                    },

                     'login': {
                        template: '<login/>'
                    },
                    'encabezado': {
                        template: '</>'
                    }
                }
            });
    };
})();