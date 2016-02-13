require.config({
    paths: {
        'angular': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.9/angular.min',
        'route': 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.16/angular-ui-router',
        'mainCtrl': '/scripts/mainCtrl',
        'loginCtrl': '/views/loginCtrl',
        'homeCtrl': '/views/homeCtrl',
        'signupCtrl': '/views/signupCtrl',
        'orderCtrl': '/views/orderCtrl',
        'authInterceptorService': '/scripts/services/authInterceptorService',
        'localstorage': 'https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.10/ngStorage',
    },
    shim: {
        route: {
            deps:['angular']
        },
        localstorage:{
            deps:['angular']
        },
        angular: {
            exports: 'angular'
        },
    },
    deps: ['app']
});

require([
    "app",
    "angular",
    "localstorage",
    "mainCtrl",
    "loginCtrl",
    "homeCtrl",
    "signupCtrl",
    "orderCtrl",
    "authInterceptorService"
], function (app) {
    app.init();
    console.log('required script loded');
});