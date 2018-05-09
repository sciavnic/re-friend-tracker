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
var KeyValueDatabase = (function () {
    function KeyValueDatabase() {
        var PouchDB = require('pouchdb-core');
        PouchDB.plugin(require('pouchdb-adapter-memory'));
        this._database = new PouchDB("path-example", { adapter: 'memory' });
    }
    KeyValueDatabase.prototype.allDocs = function (entity) {
        return __awaiter(this, void 0, void 0, function () {
            var data, result, _i, _a, row;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._database.allDocs({
                            include_docs: true,
                            startkey: entity,
                            endkey: entity + '\uffff'
                        })];
                    case 1:
                        data = _b.sent();
                        result = [];
                        for (_i = 0, _a = data["rows"]; _i < _a.length; _i++) {
                            row = _a[_i];
                            result.push(row["doc"]);
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    KeyValueDatabase.prototype.create = function (entity, data) {
        data._id = entity + '_' + this.generateUUID();
        return this._database.put(data);
    };
    KeyValueDatabase.prototype.read = function (key) {
        return this._database.get(key);
    };
    KeyValueDatabase.prototype.update = function (key, data) {
        var service = this;
        return service.read(key).then(function (doc) {
            var updatedDoc = data;
            updatedDoc._rev = doc._rev;
            updatedDoc._id = doc._id;
            return service._database.put(updatedDoc);
        }).catch(function (err) {
            data._id = key;
            return service._database.put(data);
        });
    };
    KeyValueDatabase.prototype.delete = function (key) {
        var service = this;
        return service.read(key).then(function (doc) {
            return service._database.remove(doc);
        });
    };
    KeyValueDatabase.prototype.generateUUID = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return KeyValueDatabase;
}());
exports.KeyValueDatabase = KeyValueDatabase;
//# sourceMappingURL=key-value-database.js.map