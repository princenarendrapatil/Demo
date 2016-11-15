/**
 * Created by Windows Pro on 11/14/2016.
 */

angular.module('vntInformation')
.controller('informationController', function($scope){
    $scope.getMatches = getMatches;
    $scope.items = loadAll();
    $scope.caseInfo = {
        accession: 'case 04',
        prmTissueType: 'Breast',
        patientDetails: {
            firstName: '',
            LastName: ''
        }
    };

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function getMatches (query) {
        var results = query ? $scope.items.filter( createFilterFor(query) ) : $scope.items,
            deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };

    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

        return allStates.split(/, +/g).map( function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }
    console.log("informationController");

});