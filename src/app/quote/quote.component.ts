import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 quotes: Quote [] = [
  new Quote('Life is what happens when you are busy making other plans.', ' John Lennon', 'Daniel Kirunde', new Date (2013, 9, 5)),
  new Quote('The way to get started is to quit talking and begin doing.', 'Walt Disney', 'Jesse James', new Date (2012, 6, 24)),
  new Quote('If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough.', 'Oprah Winfrey', 'Ashley Kahindi',new Date(2010, 9, 7))
]
 addNewQuote(newPublish){
   this.quotes.push(newPublish)
 }

 toogleDetails(index){
  this.quotes[index].showDetails = !this.quotes[index].showDetails;
}
deleteQuote(index,) {
  this.quotes.splice(index, 1)
}

initialVote :number
lastVote :number
diffVote : number 



  constructor() { }

  ngOnInit(): void {
  }

}
