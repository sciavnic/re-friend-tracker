"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_database_1 = require("./abstract-database");
var ActivityDatabase = (function (_super) {
    __extends(ActivityDatabase, _super);
    function ActivityDatabase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActivityDatabase.prototype.getEntityName = function () {
        return "activity";
    };
    ActivityDatabase.prototype.getSort = function () {
        return ['name'];
    };
    ActivityDatabase.prototype.createPathListEntry = function (entry, entity) {
        entry.name = entity.name;
        return _super.prototype.createPathListEntry.call(this, entry, entity);
    };
    return ActivityDatabase;
}(abstract_database_1.AbstractDatabase));
exports.ActivityDatabase = ActivityDatabase;
//# sourceMappingURL=activity-database.js.map