<<<<<<< HEAD
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

=======
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

>>>>>>> 5e2e772dfce36a8986a792aabc01b7c04455a62a
})();