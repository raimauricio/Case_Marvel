import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  buy = false;

  constructor() { }

  ngOnInit(): void {
  }

  purchase(){
    this.buy = true;
  }

  fecharMensagem(event: boolean){
    this.buy = event;
  }

}
