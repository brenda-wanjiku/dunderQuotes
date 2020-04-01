import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 quotes: Quote [] = [
  new Quote('Life is what happens when youre busy making other plans.', ' John Lennon', 'Daniel Kirunde'),
  new Quote('The way to get started is to quit talking and begin doing.', 'Walt Disney', 'Jesse James')
]
 addNewQuote(newPublish){
   this.quotes.push(newPublish)
 }

 toogleDetails(index){
  this.quotes[index].showDetails = !this.quotes[index].showDetails;
}
deleteQuote(i) {
  this.quotes.splice(i, 1)
}

  constructor() { }

  ngOnInit(): void {
  }

}
