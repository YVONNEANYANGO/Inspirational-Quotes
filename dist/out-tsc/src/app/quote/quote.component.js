var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Quote } from '../quote';
var QuoteComponent = /** @class */ (function () {
    // toogleDetails(index) {
    //   this.quotes[index].showDescription = !this.quotes[index].showDescription;
    // }
    function QuoteComponent() {
        this.quotes = [
            new Quote(1, 'Earn your success based on service to others,not at the expense of others.', 'Author :H.Jackson Brown.Jr'),
            new Quote(2, 'You get in life what you have the courage to ask for.', 'Author :Oprah Winfrey'),
            new Quote(3, 'If I am going to tell a real story,I am going to start with my name.', 'Author :Kendrick Lamar'),
            new Quote(4, 'Help others achieve their dreams and you will achieve yours.', 'Author :Les Brown'),
            new Quote(5, 'No act of kindness,no matter how small,is ever wasted.', 'Author :Aesop'),
        ];
    }
    QuoteComponent.prototype.addNewQuote = function (quote) {
        var quoteLength = this.quotes.length;
        quote.id = quoteLength + 1;
        this.quotes.push(quote);
    };
    QuoteComponent.prototype.deleteQuote = function (isComplete, index) {
        if (isComplete) {
            var toDelete = confirm("Are you sure you want to delete " + this.quotes[index].name);
            if (toDelete) {
                this.quotes.splice(index, 1);
            }
        }
    };
    QuoteComponent.prototype.toogleDetails = function (index) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    };
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent = __decorate([
        Component({
            selector: 'app-quote',
            templateUrl: './quote.component.html',
            styleUrls: ['./quote.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], QuoteComponent);
    return QuoteComponent;
}());
export { QuoteComponent };
//# sourceMappingURL=quote.component.js.map