"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_database_1 = require("./abstract-database");
var FriendDatabase = (function (_super) {
    __extends(FriendDatabase, _super);
    function FriendDatabase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FriendDatabase.prototype.getEntityName = function () {
        return "friend";
    };
    FriendDatabase.prototype.getSort = function () {
        return ['familyName', 'firstName'];
    };
    FriendDatabase.prototype.createPathListEntry = function (entry, entity) {
        entry.name = entity.firstName + ' ' + entity.familyName;
        return _super.prototype.createPathListEntry.call(this, entry, entity);
    };
    return FriendDatabase;
}(abstract_database_1.AbstractDatabase));
exports.FriendDatabase = FriendDatabase;
//# sourceMappingURL=friend-database.js.map