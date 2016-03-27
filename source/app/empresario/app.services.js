<<<<<<< HEAD
(function(){
	'use strict';

	angular.module('app.empresario.services', [
		
		]).factory('Empresario', Empresario );

		Empresario.$inject = ['$resource'];

		function Empresario($resource){
			$resource('http://10.72.255.173:8080/Portafolio-Backend/webresources/');
		}


	//factory --> Es si la logica sera compleja || Se puede acceder en cualquier parte de la aplicación



	//services --> Es mejor si el codigo es mas sencillo || Se puede acceder en cualquier parte de la aplicación
	//Sse realiza para todo lo necesario para connectar con la DB o web servies



=======
(function(){
	'use strict';

	angular.module('app.empresario.services', [
		
		]).factory('Empresario', Empresario );

		Empresario.$inject = ['$resource'];

		function Empresario($resource){
			$resource('http://10.72.255.173:8080/Portafolio-Backend/webresources/');
		}


	//factory --> Es si la logica sera compleja || Se puede acceder en cualquier parte de la aplicación



	//services --> Es mejor si el codigo es mas sencillo || Se puede acceder en cualquier parte de la aplicación
	//Sse realiza para todo lo necesario para connectar con la DB o web servies



>>>>>>> 5e2e772dfce36a8986a792aabc01b7c04455a62a
})();