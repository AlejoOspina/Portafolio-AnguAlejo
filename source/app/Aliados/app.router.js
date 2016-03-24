(function () {
    'use strict';

    angular.module('app.aliados.router', [

    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('aliados', {
                url: '/aliados',
                views: {
                    'aliados': {
                        template: '<aliados/>'
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
