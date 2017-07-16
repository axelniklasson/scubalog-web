var app = angular.module('ScubaLog', [
	'scubalog.controllers', 'scubalog.interceptors', 'scubalog.services', 'scubalog.filters',
	'ngFacebook', 'ui.router']);

/* Module setup */
angular.module('scubalog.controllers', []);
angular.module('scubalog.services', []);
angular.module('scubalog.filters', []);
// angular.module('scubalog.directives', []);
angular.module('scubalog.interceptors', []);

/* Moment.js init */

app.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$facebookProvider', function($stateProvider, $httpProvider, $urlRouterProvider, $facebookProvider) {
	// Initialize ngFacebook
  	$facebookProvider.setAppId('1599673090056954');

	// Base url
	$httpProvider.defaults.base_url = 'http://localhost:8080';

	// Interceptors
	$httpProvider.interceptors.push('UnauthorizedInterceptor');

	// States
	$stateProvider
	.state('base', {
		templateUrl: 'partials/base.html',
		abstract: true
	})
	.state('base.landing', {
		url: '/',
		templateUrl: 'partials/landing.html',
		controller: 'LandingController'
	})
	.state('base.login', {
		url: '/login',
		templateUrl: 'partials/login.html',
		controller: 'LoginController'
	})
	.state('auth', {
		templateUrl: 'partials/auth/base.html',
		controller: 'AuthBaseController',
		abstract: true
	})
	.state('auth.dashboard', {
		url: '/dashboard',
		templateUrl: 'partials/auth/dashboard.html',
		controller: 'DashboardController',
		authenticate: true
	})
	.state('auth.logbook', {
		url: '/logbook',
		templateUrl: 'partials/auth/logbook.html',
		controller: 'LogbookController',
		authenticate: true
	})
	.state('auth.profile', {
		url: '/profile',
		templateUrl: 'partials/auth/profile.html',
		controller: 'ProfileController',
		authenticate: true
	});

	$urlRouterProvider.otherwise('/dashboard');
}]);

app.run(['$rootScope', '$state', '$facebook', function($rootScope, $state, $facebook) {
	$facebook.getLoginStatus().then(function(response) {
		if (response.status === 'connected') {
			// User is logged in
			$rootScope.authenticated = true;
		}
	});

  // Load the facebook SDK asynchronously
	(function(){
		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}());

	// $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
	// 	if (toState.authenticate && !$rootScope.authenticated) {
	// 		$state.transitionTo('base.login');
	// 		event.preventDefault();
	// 	}
	// });
}]);
