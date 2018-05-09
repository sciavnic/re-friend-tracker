"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var abstract_rest_service_1 = require("./abstract-rest-service");
var ActivityRestService = (function (_super) {
    __extends(ActivityRestService, _super);
    function ActivityRestService(app, database) {
        var _this = _super.call(this, app, database) || this;
        _this.database = database;
        return _this;
    }
    ActivityRestService.prototype.initList = function () {
        var _this = this;
        _super.prototype.initList.call(this);
        var service = this;
        this._app.get('/services/friend/:friendKey/activity', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var rows, friendKey, result, _i, rows_1, activity, _a, _b, friend;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, service.database.list()];
                    case 1:
                        rows = _c.sent();
                        friendKey = req.params.friendKey;
                        result = [];
                        for (_i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                            activity = rows_1[_i];
                            if (activity.friends) {
                                for (_a = 0, _b = activity.friends; _a < _b.length; _a++) {
                                    friend = _b[_a];
                                    if (friend == friendKey) {
                                        result.push(activity);
                                        break;
                                    }
                                }
                            }
                        }
                        return [2 /*return*/, service.database.createPathList(result, res)];
                }
            });
        }); });
        this._app.get('/services/location/:locationKey/activity', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var rows, locationKey, result, _i, rows_2, activity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, service.database.list()];
                    case 1:
                        rows = _a.sent();
                        locationKey = req.params.locationKey;
                        result = [];
                        for (_i = 0, rows_2 = rows; _i < rows_2.length; _i++) {
                            activity = rows_2[_i];
                            if (activity.location == locationKey) {
                                result.push(activity);
                                break;
                            }
                        }
                        return [2 /*return*/, service.database.createPathList(result, res)];
                }
            });
        }); });
    };
    ActivityRestService.prototype.initRead = function () {
        var _this = this;
        _super.prototype.initRead.call(this);
        var service = this;
        this._app.get('/services/friend/:friendKey/activity/:activityKey', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // nop
                res.json("true");
                return [2 /*return*/];
            });
        }); });
    };
    ActivityRestService.prototype.initCreate = function () {
        var _this = this;
        _super.prototype.initCreate.call(this);
        var service = this;
        this._app.post('/services/friend/:friendKey/activity', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var friendKey, activityKey, activity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        friendKey = req.params.friendKey;
                        activityKey = req.body.activity;
                        console.log("post");
                        console.log(friendKey);
                        console.log(activityKey);
                        return [4 /*yield*/, service.database.read(activityKey)];
                    case 1:
                        activity = _a.sent();
                        if (!activity.friends) {
                            activity.friends = [];
                        }
                        activity.friends.push(friendKey);
                        activity.friends = Array.from(new Set(activity.friends)); // unique
                        return [4 /*yield*/, service.database.update(activity._id, activity)];
                    case 2:
                        _a.sent();
                        res.json("true");
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ActivityRestService.prototype.initUpdate = function () {
        var _this = this;
        _super.prototype.initUpdate.call(this);
        var service = this;
        this._app.put('/services/friend/:friendKey/activity', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var friendKey, activityKey, activity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        friendKey = req.params.friendKey;
                        activityKey = req.body.activity;
                        return [4 /*yield*/, service.database.read(activityKey)];
                    case 1:
                        activity = _a.sent();
                        if (!activity.friends) {
                            activity.friends = [];
                        }
                        activity.friends.push(friendKey);
                        activity.friends = Array.from(new Set(activity.friends)); // unique
                        return [4 /*yield*/, service.database.update(activity._id, activity)];
                    case 2:
                        _a.sent();
                        res.json("true");
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ActivityRestService.prototype.initDelete = function () {
        var _this = this;
        _super.prototype.initDelete.call(this);
        var service = this;
        this._app.delete('/services/friend/:friendKey/activity/:activityKey', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var friendKey, activityKey, activity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        friendKey = req.params.friendKey;
                        activityKey = req.params.activityKey;
                        return [4 /*yield*/, service.database.read(activityKey)];
                    case 1:
                        activity = _a.sent();
                        if (!activity.friends) {
                            activity.friends = [];
                        }
                        activity.friends.pop(friendKey);
                        activity.friends = Array.from(new Set(activity.friends)); // unique
                        return [4 /*yield*/, service.database.update(activity._id, activity)];
                    case 2:
                        result = _a.sent();
                        res.json("true");
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return ActivityRestService;
}(abstract_rest_service_1.AbstractRestService));
exports.ActivityRestService = ActivityRestService;
//# sourceMappingURL=activity-rest-service.js.map