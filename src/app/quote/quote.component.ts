import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 quotes: Quote [] = [
  new Quote('Life is what happens when you are busy making other plans.', ' John Lennon', 'Daniel Kirunde'),
  new Quote('The way to get started is to quit talking and begin doing.', 'Walt Disney', 'Jesse James'),
  new Quote('If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough.', 'Oprah Winfrey', 'Ashley Kahindi')
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

previousNumber:number
lastNumber:number
count:number

highestUpvote(){
  this.previousNumber = 0
  this.lastNumber = 0

  for(this.count=0 ; this.count < this.quotes.length; this.count++) {
    this.lastNumber = this.quotes[this.count].upvotes;
    if(this.lastNumber > this.previousNumber){this.previousNumber = this.lastNumber}
  }
  return  this.previousNumber
}

  constructor() { }

  ngOnInit(): void {
  }

}
