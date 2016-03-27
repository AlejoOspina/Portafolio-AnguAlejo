(function(){
	'use strict';

	angular.module('app.empresario.router', [
		'app.empresario.controller'
		
		]).config(configure);
	configure.$inject = ['$stateProvider', '$urlRouterProvider']

	function configure($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('empresario', {
				url: '/empresario',
				views: {
					'empresario':{
						template: '<empresario/>'
					},
					'encabezado': {
						template: '<encabezado/>'
					},
					'piepagina':{
						template: '<piepagina/>'
					}
				}



			});
	};

})();