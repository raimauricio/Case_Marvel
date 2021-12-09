import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-msg-buy',
  templateUrl: './msg-buy.component.html',
  styleUrls: ['./msg-buy.component.css']
})
export class MsgBuyComponent implements OnInit {

  @Output() fecharMensagem = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closed(){
    this.fecharMensagem.emit(false);
  }

}
