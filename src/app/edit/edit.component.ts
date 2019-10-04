import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from "../book";
import { element } from 'protractor';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  book:Book;
  bookId:number;

  constructor(private svc:DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.bookId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.books.forEach(element => {
      if(element.id == this.bookId){
        this.book=element;
      }
    })
  }

  editBook(){
    this.svc.books[this.svc.books.indexOf(this.book)]=this.book;
    console.log(this.route.snapshot.firstChild);
    console.log(this.route.snapshot.data);
    console.log(this.route.snapshot.paramMap.keys);
  }
}
