define(['app'], function (app) {
    app.controller("mainCrl", function ($scope, $localStorage, $state) {
        var authData = $localStorage.authorizationData;
        console.log(authData)
        if(authData) {
            $scope.authentication = {
                isAuth: true,
                userName: authData.userName
            };
        }
        $scope.$on('emitauthentication', function (event, args) {
            $scope.authentication = {
                isAuth: args.message.isAuth,
                userName: args.message.userName
            };
            console.log(args)
        });


        $scope.logOut = function () {
            delete $localStorage.authorizationData;
            $scope.authentication = {
                isAuth: false,
                userName: ""
            };

            $state.go('home')
        }
        
    });
})
