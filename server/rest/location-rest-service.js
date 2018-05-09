"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_rest_service_1 = require("./abstract-rest-service");
var LocationRestService = (function (_super) {
    __extends(LocationRestService, _super);
    function LocationRestService(app, database) {
        return _super.call(this, app, database) || this;
    }
    return LocationRestService;
}(abstract_rest_service_1.AbstractRestService));
exports.LocationRestService = LocationRestService;
//# sourceMappingURL=location-rest-service.js.map