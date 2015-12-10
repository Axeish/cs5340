(function(){
    angular
        .module("FormBuilderApp")
        .controller("HomeController", HomeController);

    function HomeController($scope, $rootScope, $location){
        $scope.$location = $location;
        $scope.logout = logout;

        $(function(){
            $('#help').click(function(){
            $('#guide').popup('show');
            });
        });

        if($rootScope.currentUser){
            $scope.userName = $rootScope.currentUser.userName;
        }else{
            $scope.userName = "UserName"
        }

        function logout(){
            $rootScope.currentUser = null;
        }

        if($rootScope.currentUser){
            $scope.points = $rootScope.currentUser.points;
            $scope.pointsURL = "#/activityLog"
        }else{
            $scope.points = "Login to check your"
            $scope.pointsURL = "#/login"
        }
    }
})();