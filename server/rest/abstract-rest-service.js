"use strict";
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
var AbstractRestService = (function () {
    function AbstractRestService(_app, _database) {
        this._app = _app;
        this._database = _database;
    }
    AbstractRestService.prototype.init = function () {
        this.initList();
        this.initCreate();
        this.initRead();
        this.initUpdate();
        this.initDelete();
    };
    AbstractRestService.prototype.initList = function () {
        var _this = this;
        var service = this;
        this._app.get('/services/' + service._database.getEntityName() + '', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, service._database.list()];
                    case 1:
                        rows = _a.sent();
                        this._database.createPathList(rows, res);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AbstractRestService.prototype.initCreate = function () {
        var _this = this;
        this._app.post('/services/' + this._database.getEntityName() + '', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var newDoc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._database.create(req.body)];
                    case 1:
                        newDoc = _a.sent();
                        res.json(newDoc);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AbstractRestService.prototype.initRead = function () {
        var _this = this;
        this._app.get('/services/' + this._database.getEntityName() + '/:key', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var key, doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = req.params.key;
                        return [4 /*yield*/, this._database.read(key)];
                    case 1:
                        doc = _a.sent();
                        res.json(doc);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AbstractRestService.prototype.initUpdate = function () {
        var _this = this;
        this._app.put('/services/' + this._database.getEntityName() + '/:key', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var key, doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = req.params.key;
                        return [4 /*yield*/, this._database.update(key, req.body)];
                    case 1:
                        doc = _a.sent();
                        res.json(doc);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AbstractRestService.prototype.initDelete = function () {
        var _this = this;
        this._app.delete('/services/' + this._database.getEntityName() + '/:key', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var key, doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = req.params.key;
                        return [4 /*yield*/, this._database.delete(key)];
                    case 1:
                        doc = _a.sent();
                        res.json({ message: 'deleted' });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return AbstractRestService;
}());
exports.AbstractRestService = AbstractRestService;
//# sourceMappingURL=abstract-rest-service.js.map