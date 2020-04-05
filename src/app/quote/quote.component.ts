import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 quotes: Quote [] = [
  new Quote('Thats what she said.', 'Micheal Scott', 'Martin Waweru',new Date(2010, 4, 7)),
  new Quote('Bears. Beets. Battlestar Gallactica', 'Jim Halpert', 'Martin Waweru',new Date(2001, 3, 7)),
  new Quote('You couldnt handle my undivided attention.', 'Dwight Shrute', 'Daniel Kirunde', new Date (2011, 24, 5)),
  new Quote('If I dont have some cake soon. I might die.', 'Stanley Hudson', 'Jesse James', new Date (2012, 6, 24)),
  new Quote('I saved a life. My own. Am I a hero? I really can not say, but yes.', 'Oprah Winfrey', 'Ashley Kahindi',new Date(2010, 9, 7)),
  new Quote('I talk a lot so I have learned to just tune myself out', 'Kelly Kapoor', 'Ben Koi',new Date(2010, 9, 7)),
  new Quote('Identity theft is not a joke. Jim', 'Dwight Shrute', 'Mercy Kate',new Date(2019, 9, 7)),
  new Quote('If you pray enough, you can turn yourself into a cat person', 'Angela Kinsey', 'Faith Wanjiru',new Date(1997, 9, 4)),
  new Quote('I would not miss it for the world. But if something else came up I would definitely not go.', 'Michael Scott', 'Ashley Kahindi',new Date(2002, 9, 7))
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
