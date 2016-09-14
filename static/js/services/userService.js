app.factory('User', ['$http', function($http) {
    return {
        getUser : function () {
            return $http({
                method: 'GET',
                url: '/users/getuser/'
            })

        }
    }
}]);
