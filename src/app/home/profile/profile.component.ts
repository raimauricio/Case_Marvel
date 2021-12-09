import { Component, OnInit } from '@angular/core';

import { MarvelService } from './../../services/marvel.service';
import { Perfil } from './../../interfaces/perfil.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  perfilLogado!: Perfil;
  address = '';
  cardNumber = '';
  name = ''

  constructor(
    private service: MarvelService
  ) { }

  ngOnInit(): void {
    this.perfilLogado = this.service.getPerfilLogado();
    this.name = this.perfilLogado.firstName +' '+ this.perfilLogado.lastName;
    this.address = this.perfilLogado.address+', '+this.perfilLogado.addressNumber+', '+this.perfilLogado.complement+', '+
    this.perfilLogado.district+', '+this.perfilLogado.city+', '+this.perfilLogado.cep;
    this.cardNumber = this.perfilLogado.cardNumber.substr(12,4)

  }

}
