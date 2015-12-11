//(function(){
    angular
        .module("FormBuilderApp")
        .controller("EventsController", EventsController);

    function EventsController($scope, $rootScope, $location, UserService){
        $scope.$location = $location;
        $scope.update = update;
        $scope.events = [
          {id: "#000", _id: "000", name:'Co', time:'8', date:'M', description: "Join UCB Men & Fathers to plan our next steps for taking action to address policy issues and create opportunity in our community. Dinner provided!"},
          {id: "#001", _id: "001", name:'H', time:'5', date:'M', description: "Are you a Mom that wants to become part of an amazing program to keep you moving, eating healthy, and staying healthy? Join us and other JP moms for a FREE wellness program! Zumba, Strength Training, Nutrition Counseling, Hands on cooking classes with food to take home, Health Coaching, AND MORE! FREE playgroup provided for children under 7 and children 7 and older can participate! For more info, visit our website or call 617-514-0633. Hablamos Espanol!"},
          {id: "#002", _id: "002", name:'H', time:'5', date:'h', description: "Positive parenting, an interactive workshop series, for parents of children 0-5 years old. TWO MINI SERIES: Parenting Sucess Despite the Stress, Violence Through the Eyes of a Child. Eight sessions on Tuesday Evenings October 20, October 27, November 3, November 10, November 17, December 1, December 8, December 15. NO FEE"},
          {id: "#003", _id: "003", name:'C', time:'', date:'h', description: "Daily Schedule 9:00 to 10:30 Session One 10:30 to 10:45 Break 10:45 to 12:15 Session Two 12:15 to 1:00 Lunch 1:00 to 2:15 Session Three: Workshops/Technology 2:15 to 2:30 Break 2:35 to 3:30 Session Four: Skill Building, Independent Study, Typing Master, 1:1 Case Management"},
          {id: "#004", _id: "004", name:'P', time:'4', date:'T', description: "Positive parenting, an interactive workshop series, for parents of children 0-5 years old. TWO MINI SERIES: Parenting Sucess Despite the Stress, Violence Through the Eyes of a Child. Eight sessions on Tuesday Evenings October 20, October 27, November 3, November 10, November 17, December 1, December 8, December 15. NO FEE"},
          {id: "#005", _id: "005", name:'U', time:'5', date:'T', description: "Invite Only. Class:Families First."},
          {id: "#006", _id: "006", name:'Cn', time:'M', date:'h', description: "Daily Schedule 9:00 to 10:30 Session One 10:30 to 10:45 Break 10:45 to 12:15 Session Two 12:15 to 1:00 Lunch 1:00 to 2:15 Session Three: Workshops/Technology 2:15 to 2:30 Break 2:35 to 3:30 Session Four: Skill Building, Independent Study, Typing Master, 1:1 Case Management"},
          {id: "#007", _id: "007", name:'F', time:'1', date:'W', description: "Are you a senior and would like a no pressure workshop on how to setup and use your smart phone? Join us for this 4 class workshop. Limited Space! To register please visit the Codman Branch Library or call 617-436-8214."},
          {id: "#008", _id: "008", name:'K', time:'6', date:'W', description: "First parent council meeting!"},
          {id: "#009", _id: "009", name:'T', time:'6', date:'W', description: "Exploring how 'unconscious' reasons control much of our choices and behavior in relationships with Warren Ivey, Family Clinician. Dinner served at 6pm, raffles, and childcare provided"},
          {id: "#010", _id: "010", name:'A', time:'6', date:'W', description: "Free entry. Chance to win round-trip tickets courtesy of Southwest Airlines and cash prizes courtesy of ULEM Guild. Book signing of 'Portraits of Purpose' by Don West and Ken Cooper. Reception with refreshments and music. Donate a gift for a child at Children's Services of Roxbury. RSVP to events@ulem.org"}
        ];

        $scope.collapseEvent =  {id: "001", name:'Health Moms Healthy Kids Centre St.Jamaica Plain', time:'5:00 PM', date:'Monday, December 7th', description: "Are you a Mom that wants to become part of an amazing program to keep you moving, eating healthy, and staying healthy? Join us and other JP moms for a FREE wellness program! Zumba, Strength Training, Nutrition Counseling, Hands on cooking classes with food to take home, Health Coaching, AND MORE! FREE playgroup provided for children under 7 and children 7 and older can participate! For more info, visit our website or call 617-514-0633. Hablamos Espanol!"};

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