(function () {
    'use strict';
    angular
        .module('app')
        .config(mainConfig);

    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicLoadingConfig', '$ionicConfigProvider'];

    /**
     * Function for configurate angular app
     */
    function mainConfig($stateProvider, $urlRouterProvider, $ionicLoadingConfig, $ionicConfigProvider) {

        // $ionicConfigProvider.views.maxCache(0);
        $ionicConfigProvider.backButton.text('');
        $ionicConfigProvider.views.swipeBackEnabled(false);
        // $mdGestureProvider.skipClickHijack();

        /**
         * Configuring ionic loader
         */
        angular.extend($ionicLoadingConfig, {
            noBackdrop: true
        });

        /**
         * Configuring state provider
         */
        $stateProvider


            .state('main', {
                url: '/main',
                abstract: true,
                templateUrl: 'templates/main/main.html',
                controller: 'Main',
                controllerAs: 'vm'
            })

            .state('main.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login/login.html',
                        controller: 'Login',
                        controllerAs: 'vm'
                    }
                }
            })

            .state('main.register', {
                url: '/register',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/register/register.html',
                        controller: 'Register',
                        controllerAs: 'vm'
                    }
                }
            })
        ;

        $urlRouterProvider.otherwise('/main/login');
    }

})();

