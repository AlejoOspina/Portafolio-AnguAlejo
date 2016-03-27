(function () {
    'use strict';

    angular.module('app.beneficios.router', [

    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('beneficios', {
                url: '/beneficios',
                views: {
                    'beneficios': {
                        template: '<beneficios/>'
                    },
                    'piepagina': {
                        template: '<piepagina/>'


                    },
                    'encabezado': {
                        template: '<encabezado/>'
                    }
                }
            });
    };
})();
