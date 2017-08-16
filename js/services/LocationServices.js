app.factory('locationServices', ['$http', function($http) {

        function getLocationAPI(callback) {
            return "https://notepsaas.herokuapp.com";
        }

        return {
            getLocationAPI:getLocationAPI
        };
    }])
