import { Component, OnInit } from '@angular/core';

import { Input, Output,EventEmitter } from '@angular/core';
import {Book} from '../models/book';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  @Input() book:Book;
  @Output() OnRent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  oldrentButtonClicked(){
    console.log("clicked",this.book)
    this.OnRent.emit(this.book)
    }
}
