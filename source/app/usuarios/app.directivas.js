<<<<<<< HEAD
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


=======
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


>>>>>>> 5e2e772dfce36a8986a792aabc01b7c04455a62a
})();