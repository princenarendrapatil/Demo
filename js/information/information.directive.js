/**
 * Created by Windows Pro on 11/14/2016.
 */

angular.module('vntInformation')
.directive('vntCaseInfo', function(){
    return {
        restrict: 'E',
        controller:'informationController',
        templateUrl:'js/information/information.tpl.html'
    };
});