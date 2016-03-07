(function(){
	'use strict';

	angular.module('app.usuarios.router', [
		'app.usuarios.controller'
		
		]).config(configure);
	configure.$inject = ['$stateProvider', '$urlRouterProvider']

	function configure($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('usuarios', {
				url: '/usuarios',
				views: {
					'usuarios':{
						template: '<usuarios/>'
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