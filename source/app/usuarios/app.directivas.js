(function(){
	'use strict';

	angular.module('app.usuarios.directivas', [
		
		
		]).directive('usuarios', usuarios);

	function usuarios(){
		return {
			scope: {},
			templateUrl: 'app/usuarios/list.html',
			controller: 'usuariosListCtrl',
            controllerAs: 'vm'
			
		}
	}


})();