define(['route'], function () {
    var app = angular.module('app', ['ui.router', 'ngStorage']);
    app.init = function () {
        angular.bootstrap(document, ['app']);
    }

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state("login", {
                url: "/login",
                templateUrl: "views/login.html",
                controller: 'loginCtrl'
            })
            .state("signup", {
                url: "/signup",
                templateUrl: "views/signup.html",
                controller:"signupCtrl"
            })
            .state("order", {
                url: "/order",
                templateUrl: "views/order.html",
                controller: "orderCtrl",
            })
            .state("home", {
                cache:false,
                url: "/home",
                templateUrl: "views/home.html",
                controller:"homeCtrl"
            })
    })

    app.constant('cnst', {
        serviceBase: "http://localhost:55390/"
    });

    //app.run(function ($localStorage) {
    //    //var authData = $localStorage.authorizationData;
    //    //if (authData) {

    //    //}
    //});

    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    })

    return app;
})