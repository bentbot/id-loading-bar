"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var LoadingBarService_1 = require("./LoadingBarService");
var LoadingBar_1 = require("./LoadingBar");
__export(require("./LoadingBar"));
__export(require("./LoadingBarService"));
var LoadingBarModule = (function () {
    function LoadingBarModule() {
    }
    LoadingBarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        LoadingBar_1.LoadingBar,
                    ],
                    exports: [
                        LoadingBar_1.LoadingBar,
                    ],
                    providers: [
                        LoadingBarService_1.LoadingBarService
                    ]
                },] },
    ];
    /** @nocollapse */
    LoadingBarModule.ctorParameters = function () { return []; };
    return LoadingBarModule;
}());
exports.LoadingBarModule = LoadingBarModule;