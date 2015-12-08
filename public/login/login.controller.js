(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $rootScope, $location, UserService){
        $scope.login = login;
        $scope.$location = $location;

        function login(){
            UserService.findUserByUsernameAndPassword(
                $scope.userName,
                $scope.password,
                function(user){
                    if(user != null){
                        $rootScope.currentUser = user;
                        $location.url('/home');
                    }else{
                        $location.url('/register');
                    }
                });
        }
    }
})();