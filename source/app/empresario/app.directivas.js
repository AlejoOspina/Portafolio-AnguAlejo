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


})();