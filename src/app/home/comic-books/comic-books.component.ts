import { ComicBook } from './../../interfaces/comicbook.componente';
import { Component, OnInit } from '@angular/core';

import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-comic-books',
  templateUrl: './comic-books.component.html',
  styleUrls: ['./comic-books.component.css']
})
export class ComicBooksComponent implements OnInit {

  marvelHq: any;
  comicBooks: ComicBook[]=[];

  constructor(private service: MarvelService) { }



  ngOnInit(): void {
    this.service.getComicBooks().subscribe((result) =>{
        this.marvelHq = result.data.results
        console.log(this.marvelHq)
        for(let i in this.marvelHq){
          this.comicBooks.push(
            {
              id: this.marvelHq[i].id,
              img: this.marvelHq[i].thumbnail.path+'/portrait_fantastic.jpg',
              title: this.marvelHq[i].title,
              autor: this.marvelHq[i].creators.items[0] ? this.marvelHq[i].creators.items[0].name: 'unknown author',
              published: this.marvelHq[i].dates[0].date,
              writer: this.marvelHq[i].creators.items[1] ? this.marvelHq[i].creators.items[1].name: 'unknown writer',
              penciler: this.marvelHq[i].creators.items[2] ? this.marvelHq[i].creators.items[2].name: 'unknown penciler',
              coverArtist: this.marvelHq[i].creators.items[3] ? this.marvelHq[i].creators.items[3].name: 'unknown cover',
              descrition: '#N/A',
              cast: this.marvelHq[i].creators.items[0] ? this.marvelHq[i].creators.items[0].name: 'unknown cast',
              price: this.marvelHq[i].prices[0].price
            }
          );
        }
      }
    )

  }

  pegarDetalhes(book: ComicBook){
    this.service.setDetailsBook(book);
  }

}
