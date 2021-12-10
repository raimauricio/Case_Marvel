import { Component, OnInit } from '@angular/core';


import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-comic-books',
  templateUrl: './comic-books.component.html',
  styleUrls: ['./comic-books.component.css']
})
export class ComicBooksComponent implements OnInit {

  constructor(private service: MarvelService) { }
  comicBooks: any;

  ngOnInit(): void {
    this.service.getComicBooks().subscribe((result) =>{
      this.comicBooks = result.data.results
      console.log(this.comicBooks)
    })
  }

  pegarDetalhes(id: number){
    this.service.setDetailsBook(id);
  }

}
