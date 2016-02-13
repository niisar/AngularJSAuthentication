define(['app'], function (app) {
    app.controller("orderCtrl", function ($scope, $localStorage, $http, cnst) {
        $scope.k2 = "i am signup";

        $scope.orders = [];
        $http.get(cnst.serviceBase + 'api/orders').then(function (result) {
            $scope.orders = result.data;
        });
    });
})
