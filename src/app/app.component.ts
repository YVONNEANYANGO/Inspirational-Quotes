import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amazing Inspirational Quotes';

quotes: string[];

  constructor(){

    this.quotes = ["Earn your success based on service to others,not at the expense of others.",
    "You get in life what you have the courage to ask for.",
    "If I'm gonna tell a real story,I'm gonna start with my name.",
    "Help others achieve their dreams and you will achieve yours.",
    "No act of kindness,no matter how small,is ever wasted.",]
  }
}
