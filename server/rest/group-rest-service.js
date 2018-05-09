"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_rest_service_1 = require("./abstract-rest-service");
var GroupRestService = (function (_super) {
    __extends(GroupRestService, _super);
    function GroupRestService(app, database) {
        var _this = _super.call(this, app, database) || this;
        _this.database = database;
        return _this;
    }
    return GroupRestService;
}(abstract_rest_service_1.AbstractRestService));
exports.GroupRestService = GroupRestService;
//# sourceMappingURL=group-rest-service.js.map