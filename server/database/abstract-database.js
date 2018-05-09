"use strict";
var path_list_entry_1 = require("../data/path-list-entry");
var path_list_key_1 = require("../data/path-list-key");
var key_value_database_1 = require("./key-value-database");
var AbstractDatabase = (function () {
    function AbstractDatabase() {
    }
    AbstractDatabase.initDatabase = function () {
        this._database = new key_value_database_1.KeyValueDatabase();
    };
    AbstractDatabase.prototype.list = function () {
        var service = this;
        return AbstractDatabase._database.allDocs(service.getEntityName()).then(function (rows) {
            var result = [];
            // sort
            var compare = function (a, b) {
                for (var _i = 0, _a = service.getSort(); _i < _a.length; _i++) {
                    var sort = _a[_i];
                    if (a[sort] < b[sort]) {
                        return -1;
                    }
                    else if (a[sort] > b[sort]) {
                        return 1;
                    }
                }
                return 0;
            };
            rows.sort(compare);
            return rows;
        });
    };
    AbstractDatabase.prototype.create = function (data) {
        var service = this;
        return AbstractDatabase._database.create(service.getEntityName(), data).then(function (doc) {
            doc.key = doc.id;
            delete doc.id;
            return doc;
        });
    };
    AbstractDatabase.prototype.read = function (key) {
        return AbstractDatabase._database.read(key);
    };
    AbstractDatabase.prototype.update = function (key, data) {
        return AbstractDatabase._database.update(key, data);
    };
    AbstractDatabase.prototype.delete = function (key) {
        return AbstractDatabase._database.delete(key);
    };
    AbstractDatabase.prototype.createPathList = function (rows, res) {
        var service = this;
        var promises = [];
        for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
            var item = rows_1[_i];
            var entry = new path_list_entry_1.PathListEntry();
            var key = new path_list_key_1.PathListKey();
            key.key = item._id;
            key.name = service.getEntityName() + "Key";
            entry.key = key;
            promises.push(service.createPathListEntry(entry, item));
        }
        return Promise.all(promises).then(function (result) {
            res.json(result);
        }).catch(function (err) {
            console.log(err);
        });
    };
    AbstractDatabase.prototype.createPathListEntry = function (entry, entity) {
        return new Promise(function (resolve, reject) {
            resolve(entry);
        });
    };
    AbstractDatabase.prototype.toComplexKey = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var complexKey = 'complex_';
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var key = keys_1[_a];
            complexKey += '_' + key;
        }
        return complexKey;
    };
    return AbstractDatabase;
}());
exports.AbstractDatabase = AbstractDatabase;
//# sourceMappingURL=abstract-database.js.map