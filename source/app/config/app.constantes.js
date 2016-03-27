(function () {
    'use strict';
    
    angular.module('app.config', [
    ]).constant('BASEURL', 'http://localhost:8080/senacbi-portafolio-backend-a8df077fc84b/webresources')
    
    //En este módulo se pueden declarar y asignar todas las constantes
    //que se usarán en la aplicación.
    .config(configure);

    configure.$inject = ['$authProvider', 'BASEURL'];
    function configure($authProvider, BASEURL) {
    	$authProvider.loginUrl = BASEURL + '/auth/login';
    }
    
})();