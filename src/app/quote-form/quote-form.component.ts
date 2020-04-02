import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote'
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Input() quote: Quote

  newPublish = new Quote ( '', '', '', new Date())
  
  @Output() emitQuote = new EventEmitter <Quote> (); 

  publishQuote () {
    this.emitQuote.emit (this.newPublish);
    this.newPublish = new Quote ( '', '', '', new Date())
  }

  constructor() { }

  ngOnInit(): void {
  }

}

