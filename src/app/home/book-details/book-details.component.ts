import { Component, OnInit } from '@angular/core';

import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  comicBooks: any;
  comicBookImg: any;
  idBook!: number;
  buy = false;

  constructor(private service: MarvelService) { }

  ngOnInit(): void {
    this.service.getComicBooks().subscribe((result) =>{
      this.comicBooks = result.data.results
      this.idBook = this.service.getBookDetails();
      for(let i in this.comicBooks){
        if(this.idBook == this.comicBooks[i].id)
        this.comicBookImg = this.comicBooks[i].thumbnail.path;
      }
    })
  }

  purchase(){
    this.buy = true;
  }

  fecharMensagem(event: boolean){
    this.buy = event;
  }



}
