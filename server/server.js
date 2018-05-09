"use strict";
var friend_database_1 = require("./database/friend-database");
var location_database_1 = require("./database/location-database");
var activity_database_1 = require("./database/activity-database");
var abstract_database_1 = require("./database/abstract-database");
var test_data_1 = require("./test-data");
var friend_rest_service_1 = require("./rest/friend-rest-service");
var activity_rest_service_1 = require("./rest/activity-rest-service");
var location_rest_service_1 = require("./rest/location-rest-service");
var group_database_1 = require("./database/group-database");
var group_rest_service_1 = require("./rest/group-rest-service");
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;
// serve Frontend
app.use('/', [express.static(__dirname + './../dist')]);
// setup CORS
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Request-Method", "*");
    res.header("Access-Control-Allow-Headers", req.header["Access-Control-Request-Headers"]);
    res.header("Access-Control-Expose-Headers", "Authorization");
    res.type("application/json");
    next();
});
app.options("/*", function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
});
// disable Caching
app.get('/*', function (req, res, next) {
    res.header("cache-control", "no-cache, no-store, must-revalidate"); // HTTP 1.1
    res.header("pragma", "no-cache"); // HTTP 1.0
    res.header("expires", "0"); // HTTP 1.0 proxies
    next();
});
// Path ping request
app.get('/services/ping', function (req, res) {
    res.json({ status: 'ok', userId: 'demo', version: '0.2.22' });
});
// Path example entities
abstract_database_1.AbstractDatabase.initDatabase();
var friendDatabase = new friend_database_1.FriendDatabase();
var activityDatabase = new activity_database_1.ActivityDatabase();
var locationDatabase = new location_database_1.LocationDatabase();
var groupDatabase = new group_database_1.GroupDatabase();
new friend_rest_service_1.FriendRestService(app, friendDatabase).init();
new location_rest_service_1.LocationRestService(app, locationDatabase).init();
new group_rest_service_1.GroupRestService(app, groupDatabase).init();
new activity_rest_service_1.ActivityRestService(app, activityDatabase).init();
test_data_1.TestData.init();
// set the home page route
app.get('/', function (req, res) {
    // ejs render automatically looks in the views folder
    res.render('../index.html');
});
app.listen(port, function () {
    console.log('Path example server running on http://localhost:' + port);
});
//# sourceMappingURL=server.js.map