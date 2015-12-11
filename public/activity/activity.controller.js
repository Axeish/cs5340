(function(){
    angular
        .module("FormBuilderApp")
        .controller("ActivityLogController", ActivityLogController);

    function ActivityLogController($scope, $rootScope, $location, EventService){
        $scope.$location = $location;
        $scope.addEvent = addEvent;
        $scope.updateEvent = updateEvent;
        $scope.selectEvent = selectEvent;
        $scope.deleteEvent = deleteEvent;
        $scope.submitComment = submitComment;
        $scope.model = {};

        var currentUserId = $rootScope.currentUser.id;
        var curUser = $rootScope.currentUser;

        function submitComment(){
            console.log($scope.model.commentM)
            if ($rootScope.currentUser && $scope.currentEvent && $scope.model.commentM){
                EventService.addCommentToEvent(
                    $scope.model.commentM,
                    $scope.currentEvent,
                    $rootScope.currentUser,
                    function(){
                        findAttendedEventsForUser();
                    }
                )
            }
        }

        function findAttendedEventsForUser(){
            $scope.attendedEvents = [];
            for (var index in curUser.attendedEvents){
                EventService.findEventById(
                    curUser.attendedEvents[index],
                    function(event){
                        $scope.attendedEvents.push(event)
                    }
                );
            }
        }

        function findGoingEventsForUser(){
            $scope.goingEvents = [];

            for (var index in curUser.goingEvents){
                EventService.findGoingEventById(
                    curUser.goingEvents[index],
                    function(event){
                        $scope.goingEvents.push(event)
                    }
                );
            }
        }

        findAttendedEventsForUser();
        findGoingEventsForUser()

        function addEvent(){
            if ($scope.eventName != "" && $scope.eventName != null){

                var newEvent = {
                    id: "0",
                    userId: currentUserId,
                    name: $scope.eventName
                };


                EventService.createEventForUser(
                    currentUserId,
                    newEvent,
                    function(event){
                        $scope.events.push(event);
                    }
                )

                $scope.eventName = "";



            }else{
                alert("please input event name")
            }
        }

        function selectEvent(index){
            console.log(index, typeof(index))
            $scope.currentEvent = $scope.attendedEvents[index];
            //$scope.eventName = $scope.currentEvent.name;
        }

        function updateEvent(){

            if($scope.currentEvent != null){
                var newEvent = {
                    id: $scope.currentEvent.id,
                    userId: currentUserId,
                    name: $scope.eventName
                };

                EventService.updateEventById(
                    $scope.currentEvent.id,
                    newEvent,
                    function(event){
                        $scope.eventName = "";
                    }
                )
            }else{
                alert("please select one event");
            }
        }

        function deleteEvent(index){
            EventService.deleteEventById(
                $scope.events[index].id,
                function (events){
                    $scope.events = events;
                }
            )
        }
    }
})();