var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
var QuoteDetailsComponent = /** @class */ (function () {
    function QuoteDetailsComponent() {
        this.isComplete = new EventEmitter();
    }
    QuoteDetailsComponent.prototype.quoteDelete = function (complete) {
        this.isComplete.emit(complete);
    };
    QuoteDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Quote)
    ], QuoteDetailsComponent.prototype, "quote", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], QuoteDetailsComponent.prototype, "isComplete", void 0);
    QuoteDetailsComponent = __decorate([
        Component({
            selector: 'app-quote-details',
            templateUrl: './quote-details.component.html',
            styleUrls: ['./quote-details.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], QuoteDetailsComponent);
    return QuoteDetailsComponent;
}());
export { QuoteDetailsComponent };
//# sourceMappingURL=quote-details.component.js.map