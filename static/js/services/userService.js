app.factory('UserService', ['$http', function($http) {
    return {
        getMyUser : function () {
            return $http({
                method: 'GET',
                url: '/users/getuser/'
            })

        }
    }
}]);
