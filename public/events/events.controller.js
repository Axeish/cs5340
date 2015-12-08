//(function(){
    angular
        .module("FormBuilderApp")
        .controller("EventsController", EventsController);

    function EventsController($scope, $rootScope, $location, UserService){
        $scope.$location = $location;
        $scope.update = update;
        $scope.events = [
          {name:'Community Partners in Health Profession', time:'8:00 AM', date:'Monday, December 7th'},
          {name:'Health Moms Healthy Kids Centre St.Jamaica Plain', time:'5:00 PM', date:'Monday, December 7th'},
          {name:'Health Moms Healthy Kids Green St.Jamaica Plain', time:'5:00 PM', date:'Monday, December 7th'},
          {name:'Community Partners in Health Profession', time:'8:00 AM', date:'Tuesday, December 8th'},
          {name:'Positive Parenting', time:'4:30 PM', date:'Tuesday, December 8th'},
          {name:'Urban Edge Pre-K Readings Program', time:'5:00 PM', date:'Tuesday, December 8th'},
          {name:'Community Partners in Health Profession', time:'8:00 AM', date:'Wednesday, December 9th'},
          {name:'FREE workshop for Seniors to learn Smartphones(iPhone and Android)', time:'10:30 AM', date:'Wednesday, December 9th'},
          {name:'KIPP Family Council Meeting', time:'6:00 PM', date:'Wednesday, December 9th'},
          {name:'Transitional Remedy Solutions - Emotional Triggers "Areas of Sensitivity" Meeting', time:'6:00 PM', date:'Wednesday, December 9th'},
          {name:'Annual Meeting and Holiday Reception', time:'6:00 PM', date:'Wednesday, December 9th'}
        ];

        function update(){
            var updatedUser = {
                userName: $scope.updateUserName,
                password: $scope.updatePassword,
                firstName: $scope.updateFirstName,
                lastName: $scope.updateLastName,
                email: $scope.updateEmail
            }

            UserService.updateUser(
                $rootScope.currentUser.id,
                updatedUser,
                function(updatedUser){
                    $rootScope.currentUser = updatedUser;
                }
            );
        }

    }
//})();