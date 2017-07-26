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
		// $facebookProvider.setAppId('1599673090056954'); // DEV
		$facebookProvider.setAppId('468010480219637'); // PROD
		$facebookProvider.setPermissions('email');

		$facebookProvider.setCustomInit({
			status: true,
			cookie: true,
			version: 'v2.4'
		});

		// Base url
		// $httpProvider.defaults.base_url = 'http://localhost:8080';
		$httpProvider.defaults.base_url = 'https://scubalog-backend.herokuapp.com';

		// Interceptors
		$httpProvider.interceptors.push('UnauthorizedInterceptor');

		// States
		$stateProvider
		.state('base', {
			templateUrl: 'partials/base.html',
			controller: 'BaseController',
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
		.state('auth.buddies', {
			url: '/buddies',
			templateUrl: 'partials/auth/buddies.html',
			controller: 'BuddiesController',
			authenticate: true
		})
		.state('auth.profile', {
			url: '/profile',
			templateUrl: 'partials/auth/profile.html',
			controller: 'ProfileController',
			authenticate: true
		})
		.state('auth.settings', {
			url: '/settings',
			templateUrl: 'partials/auth/settings.html',
			controller: 'SettingsController',
			authenticate: true
		});

		$urlRouterProvider.otherwise('/dashboard');
	}]);

	app.run(['$rootScope', '$state', '$facebook', 'LocalStorageService', 'FacebookService',
	function($rootScope, $state, $facebook, LocalStorageService, FacebookService) {
		$rootScope.auth = {};

		// Load the facebook SDK asynchronously
		(function(){
			(function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/en_US/sdk.js";
				fjs.parentNode.insertBefore(js, fjs);
				checkLoggedin();
			}(document, 'script', 'facebook-jssdk'));
		}());

		function checkLoggedin() {
			$facebook.getLoginStatus().then(function(response) {
				if (response.status === 'connected') {
					// User is logged in
					$rootScope.auth.authenticated = true;
					if (!LocalStorageService.exists('fbUser')) {
						FacebookService.cacheUserData();
					} else {
						$rootScope.auth.user = LocalStorageService.get('user');
						$rootScope.auth.user.picture = LocalStorageService.get('fbUser').picture;
					}
				} else {
					LocalStorageService.clear('fbUser');
					LocalStorageService.clear('fbToken');
					$rootScope.auth.authenticated = false;
					$state.transitionTo('base.login');
				}
			});

			$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
				if (toState.authenticate && !$rootScope.auth.authenticated && !LocalStorageService.exists('fbToken')) {
					$state.transitionTo('base.login');
					event.preventDefault();
				}
			});
		}
	}]);
