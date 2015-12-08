(function(){
    angular
        .module("FormBuilderApp")
        .controller("EventController", EventController);

    function EventController($scope, $rootScope, $location, EventService){
        $scope.$location = $location;
        $scope.addEvent = addEvent;
        $scope.updateEvent = updateEvent;
        $scope.selectEvent = selectEvent;
        $scope.deleteEvent = deleteEvent;


        function findAllEvents(){
            EventService.findAllEvents(
                function(events){
                    $scope.events = events;
                }
            )
        }

        findAllEvents();

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
            $scope.currentEvent = $scope.events[index];
            $scope.eventName = $scope.currentEvent.name;
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