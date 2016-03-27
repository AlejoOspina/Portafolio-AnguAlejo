(function () {
    'use strict';

    angular.module('app.planes.router', [

    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('planes', {
                url: '/planes',
                views: {
                    'planes': {
                        template: '<planes/>'
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
