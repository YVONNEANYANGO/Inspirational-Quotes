import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Earn your success based on service to others,not at the expense of others.','Author :H.Jackson Brown.Jr'),
    new Quote(2, 'You get in life what you have the courage to ask for.','Author :Oprah Winfrey'),
    new Quote(3, 'If I am going to tell a real story,I am going to start with my name.','Author :Kendrick Lamar'),
    new Quote(4, 'Help others achieve their dreams and you will achieve yours.','Author :Les Brown'),
    new Quote(5, 'No act of kindness,no matter how small,is ever wasted.','Author :Aesop'),
  ]

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }
  ngOnInit() {
  }

}
