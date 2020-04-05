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
   this.quotes.unshift(newPublish)
 }

 toogleDetails(index){
  this.quotes[index].showDetails = !this.quotes[index].showDetails;
}
deleteQuote(index,) {
  this.quotes.splice(index, 1)
}

count: number; 
initialNumber: number;  
finalNumber: number;   

  mostLikes() {
    this.initialNumber = 0
    this.finalNumber = 0
    for(this.count = 0 ; this.count < this.quotes.length; this.count++) {
      this.finalNumber = this.quotes[this.count].upvotes;
      if(this.finalNumber > this.initialNumber){this.initialNumber = this.finalNumber}
    }
    return  this.initialNumber
  }

  upvoteCLick(index) {
    this.quotes[index].upvotes ++;
  }
  downvoteCLick (index) {
    this.quotes[index].downvotes ++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
