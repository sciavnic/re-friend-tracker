"use strict";
var friend_database_1 = require("./database/friend-database");
var location_database_1 = require("./database/location-database");
var activity_database_1 = require("./database/activity-database");
var group_database_1 = require("./database/group-database");
var TestData = (function () {
    function TestData() {
    }
    TestData.init = function () {
        var personDatabase = new friend_database_1.FriendDatabase();
        var locationDatabase = new location_database_1.LocationDatabase();
        var activityDatabase = new activity_database_1.ActivityDatabase();
        var groupDatabase = new group_database_1.GroupDatabase();
        var birthdate1 = new Date();
        var birthdate2 = new Date();
        var birthdate3 = new Date();
        var birthdate4 = new Date();
        birthdate1.setDate(birthdate1.getDate() - 10000);
        birthdate2.setDate(birthdate2.getDate() - 10500);
        birthdate3.setDate(birthdate3.getDate() - 11000);
        birthdate4.setDate(birthdate4.getDate() - 12000);
        var promises = [];
        promises.push(locationDatabase.create({ name: 'Winterthur' }));
        promises.push(locationDatabase.create({ name: 'Effretikon' }));
        promises.push(locationDatabase.create({ name: 'Zürich' }));
        promises.push(locationDatabase.create({ name: 'Zinal' }));
        Promise.all(promises).then(function (locations) {
            var promises = [];
            promises.push(personDatabase.create({ firstName: 'Adam', familyName: 'Jones', nickname: 'Jony', location: locations[0].key, birthdate: birthdate1 }));
            promises.push(personDatabase.create({ firstName: 'Betty', familyName: 'Miller', nickname: 'Betty', location: locations[2].key, birthdate: birthdate2 }));
            promises.push(personDatabase.create({ firstName: 'Chris', familyName: 'Connor', nickname: 'Con', location: locations[3].key, birthdate: birthdate3 }));
            promises.push(personDatabase.create({ firstName: 'Dave', familyName: 'Dean', nickname: 'Boss', location: locations[3].key, birthdate: birthdate4 }));
            Promise.all(promises).then(function (friends) {
                activityDatabase.create({ name: "Kino", friends: [friends[0].key], location: locations[2].key, date: new Date() });
                activityDatabase.create({ name: "Jogging", location: locations[0].key, date: new Date() });
                activityDatabase.create({ name: "Essen", location: locations[1].key, date: new Date() });
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
        Promise.all(promises).then(function (persons) {
            promises = [];
            promises.push(groupDatabase.create({ name: "Familie", creationDate: new Date() }));
            promises.push(groupDatabase.create({ name: "Freunde", creationDate: new Date() }));
            promises.push(groupDatabase.create({ name: "Studium", creationDate: new Date() }));
        }).catch(function (err) {
            console.log(err);
        });
    };
    return TestData;
}());
exports.TestData = TestData;
//# sourceMappingURL=test-data.js.map