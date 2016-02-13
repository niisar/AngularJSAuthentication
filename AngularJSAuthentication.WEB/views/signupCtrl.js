define(['app'], function (app) {
    app.controller("signupCtrl", function ($scope, $localStorage, $http, $timeout, $state, cnst) {
        $scope.savedSuccessfully = false;
        $scope.message = "";


        $scope.registration = {
            userName: "",
            password: "",
            confirmPassword: ""
        };

        $scope.signup = function () {
            delete $localStorage.authorizationData;
            $scope.authentication = {
                isAuth: false,
                userName: ""
            };

            $http.post(cnst.serviceBase + 'api/account/register', $scope.registration).then(function (response) {
                $scope.savedSuccessfully = true;
                $scope.message = "User has been registered successfully, you will redirected to login page in 2 second";
                $timeout(function () {
                    $state.go("login");
                }, 2500)
            }, function (err) {
                var errors = [];
                for (var key in err.data.modelState) {
                    for (var i = 0; i < err.data.modelState[key].length; i++) {
                        errors.push(errors.data.modelState[key][i]);
                    }
                }
                $scope.message = "Failed to register user due to:" + errors.join(' , ');
            });
        };
    });
})
