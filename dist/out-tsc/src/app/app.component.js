var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { Quote } from './quote';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Amazing Inspirational Quotes';
        // quotes: string[];
        this.quotes = [
            new Quote(1, 'Earn your success based on service to others,not at the expense of others.', 'Author :H.Jackson Brown.Jr'),
            new Quote(2, 'You get in life what you have the courage to ask for.', 'Author :Oprah Winfrey'),
            new Quote(3, 'If I am going to tell a real story,I am going to start with my name.', 'Author :Kendrick Lamar'),
            new Quote(4, 'Help others achieve their dreams and you will achieve yours.', 'Author :Les Brown'),
            new Quote(5, 'No act of kindness,no matter how small,is ever wasted.', 'Author :Aesop'),
        ];
        // constructor(){
        //   this.quotes = ["Earn your success based on service to others,not at the expense of others.",
        //   "You get in life what you have the courage to ask for.",
        //   "If I'm gonna tell a real story,I'm gonna start with my name.",
        //   "Help others achieve their dreams and you will achieve yours.",
        //   "No act of kindness,no matter how small,is ever wasted.",]
        // }
    }
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map