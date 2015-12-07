(function(){
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $rootScope, $location){
        $scope.$location = $location;
        $scope.logout = logout;

        if($rootScope.currentUser){
            $scope.userName = $rootScope.currentUser.userName;
        }else{
            $scope.userName = "UserName"
        }

        function logout(){
            $rootScope.currentUser = null;
            console.log(currentUser);
        }
    }
})();