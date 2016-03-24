(function () {
    'use strict';

    angular.module('app.formulario.directivas', [

    ]).directive('formulario', formulario)
    
    function formulario() {
        return {
            scope: {},
            templateUrl: 'app/formulario/formulario.html',
            controller: 'FormularioCtrl',
            controllerAs: 'vm'
        }
    }
    
})();