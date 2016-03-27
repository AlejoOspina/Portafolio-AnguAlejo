<<<<<<< HEAD
(function(){
	'use strict';

	angular.module('app.empresario.directivas', [
		
		
		]).directive('empresario', empresario);

	function empresario(){
		return {
			scope: {},
			templateUrl: 'app/empresario/empresario.html',
			controller: 'empresarioListCtrl',
            controllerAs: 'vm'
			
		}
	}


=======
(function(){
	'use strict';

	angular.module('app.empresario.directivas', [
		
		
		]).directive('empresario', empresario);

	function empresario(){
		return {
			scope: {},
			templateUrl: 'app/empresario/empresario.html',
			controller: 'empresarioListCtrl',
            controllerAs: 'vm'
			
		}
	}


>>>>>>> 5e2e772dfce36a8986a792aabc01b7c04455a62a
})();