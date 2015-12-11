(function(){
    angular
        .module("FormBuilderApp")
        .factory("EventService", EventService);

    function EventService(){
        var events = [
                       {id: "#000", _id: "000", title: "Community Partners in Health Professions", userId: "123", date: "Mon, Dec.7th", beginTime: "8:00AM", endTime: "10:00AM", description: ""},
                       {id: "#010", _id: "010", title: "Health Moms Healthy Kids Centre St. Jamaica Plain", userId: "234", date: "Mon, Dec.7th", beginTime: "5:00PM", endTime: "6:00PM", comment:[{userId: "Tian", message: "this event is boring."}, {userId: "Danjin", message:"I am a new mum, got useful knowledge in this event."}, {userId: "Yuan", message: "the free food is nice"}, {userId: "Ashish", message: "The weather is nice today."}], description: "Are you a Mom that wants to become part of an amazing program to keep you moving, eating healthy, and staying healthy? Join us and other JP moms for a FREE wellness program! Zumba, Strength Training, Nutrition Counseling, Hands on cooking classes with food to take home, Health Coaching, AND MORE! FREE playgroup provided for children under 7 and children 7 and older can participate! For more info, visit our website or call 617-514-0633. Hablamos Espanol!"},
                       {id: "#007", _id: "007",  title: "UEB Men Meet-up", userId: "234", date: "Mon, Dec.7th", beginTime: "6:00PM", endTime: "8:00PM", description: "Join UCB Men & Fathers to plan our next steps for taking action to address policy issues and create opportunity in our community. Dinner provided!"},
                       {id: "#011", _id: "011",  title: "Community Partners in Health Professions", userId: "234", date: "Tues, Dec.8th", beginTime: "8:00AM", endTime: "4:45PM", description: "Daily Schedule 9:00 to 10:30 Session One 10:30 to 10:45 Break 10:45 to 12:15 Session Two 12:15 to 1:00 Lunch 1:00 to 2:15 Session Three: Workshops/Technology 2:15 to 2:30 Break 2:35 to 3:30 Session Four: Skill Building, Independent Study, Typing Master, 1:1 Case Management"},
                       {id: "#110", _id: "110",  title: "Positive Parenting", userId: "234", date: "Tue, Dec.8th", beginTime: "4:30PM", endTime: "4:45PM", description: "Positive parenting, an interactive workshop series, for parents of children 0-5 years old. TWO MINI SERIES: Parenting Sucess Despite the Stress, Violence Through the Eyes of a Child. Eight sessions on Tuesday Evenings October 20, October 27, November 3, November 10, November 17, December 1, December 8, December 15. NO FEE"},
                       {id: "#019", _id: "019",  title: "Urban Edge Pre-K Readiness Program", userId: "234", date: "Tue, Dec.8th", beginTime: "5:00PM", endTime: "8:00PM", description: "Invite Only. Class:Families First."},
                       {id: "#210", _id: "210",  title: "Community Partners in Health Professions", userId: "234", date: "Wed, Dec.9th", beginTime: "8:00AM", endTime: "4:45PM", description: "Daily Schedule 9:00 to 10:30 Session One 10:30 to 10:45 Break 10:45 to 12:15 Session Two 12:15 to 1:00 Lunch 1:00 to 2:15 Session Three: Workshops/Technology 2:15 to 2:30 Break 2:35 to 3:30 Session Four: Skill Building, Independent Study, Typing Master, 1:1 Case Management"},
                       {id: "#410", _id: "410",  title: "FREE workshop for Seniors to learn Smartphones(iPhone and Android)", userId: "234", date: "Wed, Dec.9th", beginTime: "10:30AM", endTime: "4:45PM", description: "Are you a senior and would like a no pressure workshop on how to setup and use your smart phone? Join us for this 4 class workshop. Limited Space! To register please visit the Codman Branch Library or call 617-436-8214."},
                       {id: "014", _id: "#014",  title: "KIPP Family Council Meeting", userId: "234", date: "Wed, Dec.9th", beginTime: "6:00PM", endTime: "7:00PM", description: "First parent council meeting!"},
                       {id: "017", _id: "#017",  title: "Transitional Remedy Solutions - Emotional Triggers 'Areas of Sensitivity' Meeting", userId: "234", date: "Wed, Dec.9th", beginTime: "6:00PM", endTime: "8:00PM", description: "Exploring how 'unconscious' reasons control much of our choices and behavior in relationships with Warren Ivey, Family Clinician. Dinner served at 6pm, raffles, and childcare provided"},
                       {id: "018", _id: "#018",  title: "Annual Meeting and Holiday Reception", userId: "234", date: "Wed, Dec.9th", beginTime: "6:00PM", endTime: "8:00PM", description: "Free entry. Chance to win round-trip tickets courtesy of Southwest Airlines and cash prizes courtesy of ULEM Guild. Book signing of 'Portraits of Purpose' by Don West and Ken Cooper. Reception with refreshments and music. Donate a gift for a child at Children's Services of Roxbury. RSVP to events@ulem.org"}
                     ]

        var service = {
            createEventForUser: createEventForUser,
            findAllEventsForUser: findAllEventsForUser,
            deleteEventById: deleteEventById,
            findEventById: findEventById,
            findAllEvents: findAllEvents,
            updateEventById: updateEventById,
            findGoingEventById: findGoingEventById
        }

        return service;

        function findAllEvents(callback){
            callback(events)
        }

        function findEventById(eventId, callback){
            var existEvent = null;
            for (var index in events){
                if (events[index]._id === eventId){
                    existEvent = events[index];
                    callback(existEvent);
                }
            }
        }

        function findGoingEventById(eventId, callback){
            var existEvent = null;
            for (var index in events){
                if (events[index].id === eventId){
                    existEvent = events[index];
                    callback(existEvent);
                }
            }
        }

        function createEventForUser(userId, event, callback){
            event.id = Guid.create().value;
            event.userId = userId;
            events.push(event);
            callback(event);
        }

        function findAllEventsForUser(userId, callback){
            var userEvents = [];
            for(var index in events){
                if(events[index].userId === userId){
                    userEvents.push(events[index]);
                }
            }
            callback(userEvents);
        }

        function deleteEventById(eventId, callback){
            for(var index in events){
                if( events[index].id === eventId){
                    events.splice(index, 1);
                }
            }
            callback(events);
        }

        function updateEventById(eventId, newEvent, callback){
            for(var index in events){
                if(events[index].id === eventId){
                    events[index].userId = newEvent.userId;
                    events[index].name = newEvent.name;
                }
            }
            callback(events[index]);
        }
    }

})();