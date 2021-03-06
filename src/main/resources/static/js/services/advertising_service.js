/**
 * Created by gersonsales on 21/03/17.
 */

app.factory('AdvertisingService', ['$http', '$q', function ($http, $q) {
    return {
        fetchAllAdvertisements: function () {
            return $http.get('/advertisement/').then(
                function (response) {
                    return response.data;
                },
                function (errorResponse) {
                    console.error('Error while fetching advertisements');
                    return $q.reject(errorResponse);
                }
            )
        },


        createAdvertisement: function (advertisementForm) {
            return $http.post('/advertisement/', advertisementForm).then(
                function (response) {
                    return response.data;
                },
                function (errorResponse) {
                    console.error("Error while creating advertising");
                    return $q.reject(errorResponse);
                }
            )
        },

        updateAdvertisement: function (advertisement) {
            return $http.post('', advertisement).then (
                function (response) {
                    return response.data;
                },
                function (errorResponse) {
                    console.error("Error while update advertisement");
                    return $q.reject(errorResponse);
                }
            )
        },

        deleteAdvertisement: function (id) {
            return $http.delete('/advertisement/' + id).then(
                function (response) {
                    return response.data;
                },
                function (errorResponse) {
                    console.error("Error while deleting advertisement.")
                    return $q.reject(errorResponse);
                }
            )
        },

        getAdvertisement: function (id) {
            return $http.get('/advertisement/' + id).then (
                function (response) {
                    return response.data;
                },
                function (errorResponse) {
                    console.error("Error while getting advertisement.")
                    return $q.reject(errorResponse);
                }
            )

        }
    }
}]);
