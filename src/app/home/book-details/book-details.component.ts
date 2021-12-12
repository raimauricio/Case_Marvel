import { Component, OnInit } from '@angular/core';

import { ComicBook } from './../../interfaces/comicbook.componente';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {


  comicBook!: ComicBook
  buy = false;

  constructor(private service: MarvelService) { }

  ngOnInit(): void {

    this.comicBook = this.service.getBookDetails();

  }

  purchase(){
    this.buy = true;
  }

  fecharMensagem(event: boolean){
    this.buy = event;
  }



}
