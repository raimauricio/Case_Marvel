import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic-books',
  templateUrl: './comic-books.component.html',
  styleUrls: ['./comic-books.component.css']
})
export class ComicBooksComponent implements OnInit {

  arrayBooks = [1,2,3,4,5,6,7,8,9,10,11,12];
  
  constructor() { }

  ngOnInit(): void {
  }

}
