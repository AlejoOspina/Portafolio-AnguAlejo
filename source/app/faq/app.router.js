(function () {
    'use strict';

    angular.module('app.faq.router', [

    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('faq', {
                url: '/faq',
                views: {
                    'faq': {
                        template: '<faq/>'
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
