define(['app'], function (app) {
    app.controller("loginCtrl", function ($scope, $http, $localStorage, $state, cnst) {
        $scope.loginData = {
            userName: "",
            password: ""
        }
        $scope.message = "";
        $scope.login = function () {
            delete $localStorage.authorizationData;
            var data = "grant_type=password&username=" + $scope.loginData.userName + "&password=" + $scope.loginData.password;
            $http.post(cnst.serviceBase + 'token', data, {
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }).success(function (response) {

                $localStorage.authorizationData = { token: response.access_token, userName: $scope.loginData.userName };
                $scope.authentication = {
                    isAuth: true,
                    userName: $scope.loginData.userName
                };
                $scope.$emit('emitauthentication', { message: $scope.authentication });
                $state.go('home')
            }).error(function (err) {
                $scope.authentication = {
                    isAuth: false,
                    userName: ""
                };
            });
        }
    });
})
