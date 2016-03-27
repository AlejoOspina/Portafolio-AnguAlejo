<<<<<<< HEAD
(function(){
	'use strict';

	angular.module('app.login.controller', [])
		   .controller('LoginCtrl', LoginCtrl);


		   LoginCtrl.$inject = ['$auth', '$location'];

		   function LoginCtrl($auth, $location){
		   		var vm = this;


		   		vm.signIn = signIn;
		   		vm.getCurrentUser = getCurrentUser;
		   		vm.isAuthenticated = isAuthenticated;
		   		vm.logout = logout;
		   		vm.isAdmin = isAdmin;
		   		vm.isUser = isUser;

		   		function signIn(){
		   			$auth.login(vm.user)
		   			.then(function (){
		   				vm.user = {};
		   				console.log('Sesión iniciada ...');
		   				$location.path('/');
		   			})
		   			.catch(function (error) {
		   				console.log(error.status + ' ' + error.data); 
		   			})
		   		}

		   		function isAuthenticated(){
		   			return $auth.isAuthenticated();
		   		}

		   		function getCurrentUser() {
		   			if(isAuthenticated()){
		   				return $auth.getPayLoad().user;
		   			}else {
		   				return '';
		   			}
		   		}

		   		function logout() {
		   			if (isAuthenticated) {
		   				$auth.logout()
		   				.then(function () {
		   					console.log('Sesión finalizada ...');
		   					$location.path('/');
		   				})
		   			}else {
		   				return ;
		   			}
		   		}

		   		function isAdmin() {
		   			if (isAuthenticated()) {
		   				return $auth.getPayLoad.roles.indexOf('ADMIN') !== -1;
		   			} else{
		   				return false;
		   			}
		   		}
		   		function isUser() {
		   			if (isAuthenticated()) {
		   				return $auth.getPayLoad.roles.indexOf('USER') !== -1;
		   			} else{
		   				return false;
		   			}
		   		}





		   }


=======
(function(){
	'use strict';

	angular.module('app.login.controller', [])
		   .controller('LoginCtrl', LoginCtrl);


		   LoginCtrl.$inject = ['$auth', '$location'];

		   function LoginCtrl($auth, $location){
		   		var vm = this;


		   		vm.signIn = signIn;
		   		vm.getCurrentUser = getCurrentUser;
		   		vm.isAuthenticated = isAuthenticated;
		   		vm.logout = logout;
		   		vm.isAdmin = isAdmin;
		   		vm.isUser = isUser;

		   		function signIn(){
		   			$auth.login(vm.user)
		   			.then(function (){
		   				vm.user = {};
		   				console.log('Sesión iniciada ...');
		   				$location.path('/');
		   			})
		   			.catch(function (error) {
		   				console.log(error.status + ' ' + error.data); 
		   			})
		   		}

		   		function isAuthenticated(){
		   			return $auth.isAuthenticated();
		   		}

		   		function getCurrentUser() {
		   			if(isAuthenticated()){
		   				return $auth.getPayLoad().user;
		   			}else {
		   				return '';
		   			}
		   		}

		   		function logout() {
		   			if (isAuthenticated) {
		   				$auth.logout()
		   				.then(function () {
		   					console.log('Sesión finalizada ...');
		   					$location.path('/');
		   				})
		   			}else {
		   				return ;
		   			}
		   		}

		   		function isAdmin() {
		   			if (isAuthenticated()) {
		   				return $auth.getPayLoad.roles.indexOf('ADMIN') !== -1;
		   			} else{
		   				return false;
		   			}
		   		}
		   		function isUser() {
		   			if (isAuthenticated()) {
		   				return $auth.getPayLoad.roles.indexOf('USER') !== -1;
		   			} else{
		   				return false;
		   			}
		   		}





		   }


>>>>>>> 5e2e772dfce36a8986a792aabc01b7c04455a62a
})();