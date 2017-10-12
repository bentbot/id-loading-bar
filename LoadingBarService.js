"use strict";
var core_1 = require("@angular/core");
var LoadingBarService = (function () {
    function LoadingBarService() {
        this.onStart = new core_1.EventEmitter();
        this.onStop = new core_1.EventEmitter();
        this.onComplete = new core_1.EventEmitter();
        this.onReset = new core_1.EventEmitter();
        this.onSet = new core_1.EventEmitter();
        this.onFill = new core_1.EventEmitter();
    }
    LoadingBarService.prototype.start = function () {
        this.onStart.emit(undefined);
    };
    LoadingBarService.prototype.stop = function () {
        this.onStop.emit(undefined);
    };
    LoadingBarService.prototype.complete = function () {
        this.onComplete.emit(undefined);
    };
    LoadingBarService.prototype.reset = function () {
        this.onReset.emit(undefined);
    };
    LoadingBarService.prototype.set = function () {
        this.onSet.emit(undefined);
    };
    LoadingBarService.prototype.fill = function () {
        this.onFill.emit(undefined);
    };
    LoadingBarService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    LoadingBarService.ctorParameters = function () { return []; };
    return LoadingBarService;
}());
exports.LoadingBarService = LoadingBarService;