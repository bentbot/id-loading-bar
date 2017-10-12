"use strict";
var core_1 = require("@angular/core");
var LoadingBarService_1 = require("./LoadingBarService");
var LoadingBar = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function LoadingBar(loadingBarService) {
        this.loadingBarService = loadingBarService;
        // -------------------------------------------------------------------------
        // Inputs / Outputs
        // -------------------------------------------------------------------------
        this.color = "#5375a2";
        this.height = 1;
        this.animationTime = 0.5;
        this.runInterval = 300;
        this.progress = 0;
        // -------------------------------------------------------------------------
        // Public Properties
        // -------------------------------------------------------------------------
        this.visible = false;
    }
    // -------------------------------------------------------------------------
    // Lifecycle listeners
    // -------------------------------------------------------------------------
    LoadingBar.prototype.ngOnInit = function () {
        var _this = this;
        if (this.loadingBarService) {
            this.loadingBarService.onStart.subscribe(function () { return _this.start(); });
            this.loadingBarService.onStop.subscribe(function () { return _this.stop(); });
            this.loadingBarService.onReset.subscribe(function () { return _this.reset(); });
            this.loadingBarService.onComplete.subscribe(function () { return _this.complete(); });
            this.loadingBarService.onSet.subscribe(function () { return _this.set(); });
            this.loadingBarService.onFill.subscribe(function () { return _this.set(); });
        }
    };
    LoadingBar.prototype.ngOnDestroy = function () {
        if (this.loadingBarService) {
            this.loadingBarService.onStart.unsubscribe();
            this.loadingBarService.onStop.unsubscribe();
            this.loadingBarService.onReset.unsubscribe();
            this.loadingBarService.onComplete.unsubscribe();
            this.loadingBarService.onSet.unsubscribe();
            this.loadingBarService.onFill.unsubscribe();
        }
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    LoadingBar.prototype.start = function () {
        var _this = this;
        _this.visible = true;
        this.runningInterval = setInterval(function () {
            _this.progress++;
            if (_this.progress > 100)
                _this.stop();
        }, _this.runInterval);
    };
    LoadingBar.prototype.stop = function () {
        var _this = this;
        if (_this.runningInterval) {
            clearInterval(_this.runningInterval);
            _this.runningInterval = null;
        }
    };
    LoadingBar.prototype.reset = function () {
        var _this = this;
        var animation = _this.animationTime;
        _this.stop();
        _this.animationTime = 0;
        _this.progress = 0;
        _this.animationTime = animation;
    };
    LoadingBar.prototype.complete = function () {
        var _this = this;
        _this.progress = 100;
        _this.stop();
    };
    LoadingBar.prototype.fill = function () {
        var _this = this;
        _this.progress = 100;
        _this.stop();
    };
    LoadingBar.prototype.set = function (alpha) {
        var _this = this;
        _this.progress = alpha;
        _this.stop();
    };
    LoadingBar.prototype.show = function () {
        var _this = this;
        _this.visible = true;
    };
    LoadingBar.prototype.hide = function () {
        var _this = this;
        setTimeout(function () {
            _this.visible = false;
            setTimeout(function () {
                _this.progress = 0;
            }, _this.animationTime * 1000);
        }, this.animationTime * 1000);
    };

    LoadingBar.decorators = [
        { type: core_1.Component, args: [{
                    selector: "loading-bar",
                    template: "\n<div class=\"loading-bar\">\n    <div class=\"loading-bar-progress\" \n        [style.width]=\"progress + '%'\" \n        [style.backgroundColor]=\"color\" \n        [style.color]=\"color\"\n        [style.height]=\"height + 'px'\" \n        [style.opacity]=\"visible ? 1 : 0\"\n        [style.-webkit-transition]=\"'all ' + animationTime + 's ease-in-out'\"\n        [style.-moz-transition]=\"'all ' + animationTime + 's ease-in-out'\"\n        [style.-o-transition]=\"'all ' + animationTime + 's ease-in-out'\"\n        [style.transition]=\"'all ' + animationTime + 's ease-in-out'\"></div>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    LoadingBar.ctorParameters = function () { return [
        { type: LoadingBarService_1.LoadingBarService, decorators: [{ type: core_1.Optional },] },
    ]; };
    LoadingBar.propDecorators = {
        'color': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'animationTime': [{ type: core_1.Input },],
        'runInterval': [{ type: core_1.Input },],
        'progress': [{ type: core_1.Input },],
    };
    return LoadingBar;
}());
exports.LoadingBar = LoadingBar;