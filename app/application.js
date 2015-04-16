(function(angular) {
    'use strict';

    angular
        .module('cancel', ['ngResource'])
        .controller('Main', Main);

    Main.$inject = ['$scope', '$http', '$resource', '$q'];
    function Main($scope, $http, $resource, $q) {
        var defer = $q.defer();

        $scope.fetchByHttp = function() {
            defer = $q.defer();
            $http.get('/version', {
                timeout: defer.promise
            }).then(function(res) {
                console.log(res.data);
            }).catch(function() {
                console.log('ERROR');
            })
        }

        $scope.fetchByResource = function() {
            defer = $q.defer();
            var resource = $resource('/version', null, {
                get: {
                    method: "GET",
                    isArray: false,
                    timeout: defer.promise
                }
            });

            resource.get().$promise.then(function(res) {
                console.log(res);
            }).catch(function() {
                console.log('ERROR');
            })
        }



        $scope.cancel = function() {
            defer.resolve();
        }
    }
}).call(this, angular);