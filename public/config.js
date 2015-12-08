(function(){
    angular
        .module("FormBuilderApp")
        .config(Configure);

    function Configure($routeProvider){
            $routeProvider
                .when("/event", {
                    templateUrl: "./event/event.view.html"
                })
                .when("/activityLog", {
                    templateUrl: "./activity/activity.view.html"
                })
                .when("/home", {
                    templateUrl: "./home/home.view.html"
                })
                .when("/register", {
                    templateUrl: "./register/register.view.html"
                })
                .when("/login", {
                    templateUrl: "./login/login.view.html"
                })
                .when("/profile", {
                    templateUrl: "./profile/profile.view.html"
                })
                .when("/form", {
                    templateUrl: "./form/form.view.html"
                })
                .otherwise({
                    redirectTo: "/home"
                });
    }
})();