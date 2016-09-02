app.factory('Author', ['$http', '$resource', function($http, $resource) {
    return $resource('/authors/:id/',
        {id: '@id'},
        {
            'update': {
                method: 'PUT'
            },

            'query': {
                method: 'GET', isArray: true
            },
            'getAuthor': {
                method: 'GET', isArray: false
            },

            'save': {
                method: "POST"
            },
            'delete': {
                method: "DELETE"
            }
        })
    }]);
