import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Earn your success based on service to others,not at the expense of others.'),
    new Quote(2, 'You get in life what you have the courage to ask for.'),
    new Quote(3, 'If I am going to tell a real story,I am going to start with my name.'),
    new Quote(4, 'Help others achieve their dreams and you will achieve yours.'),
    new Quote(5, 'No act of kindness,no matter how small,is ever wasted.'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
