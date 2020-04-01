import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 quotes: Quote [] = [
  new Quote('Life has no meaning', 'Marget Thatcher', 'James Owen'),
  new Quote('Life has no meaning', 'Marget Thatcher', 'James Owen')
]
 addNewQuote(newPublish){
   this.quotes.push(newPublish)
 }

 numberOfLikes : number = 0 

likeButtonCLick () {
  this.numberOfLikes++;
}
  constructor() { }

  ngOnInit(): void {
  }

}
