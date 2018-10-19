import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Amazing Inspirational Quotes';

// quotes: string[];

  // constructor(){
  quotes = [
    new Quote(1, 'Earn your success based on service to others,not at the expense of others.'),
    new Quote(2, 'You get in life what you have the courage to ask for.'),
    new Quote(3, 'If I am going to tell a real story,I am going to start with my name.'),
    new Quote(4, 'Help others achieve their dreams and you will achieve yours.'),
    new Quote(5, 'No act of kindness,no matter how small,is ever wasted.'),
  ]
  //   this.quotes = ["Earn your success based on service to others,not at the expense of others.",
  //   "You get in life what you have the courage to ask for.",
  //   "If I'm gonna tell a real story,I'm gonna start with my name.",
  //   "Help others achieve their dreams and you will achieve yours.",
  //   "No act of kindness,no matter how small,is ever wasted.",]
  // }
}
