import { HttpClient } from '@angular/common/http';
import { Perfil } from './../interfaces/perfil.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MarvelService {

  perfis: Perfil[] = [];

  constructor(private http: HttpClient) { }


  buscaCep(cep: string){

    return this.http.get('https://viacep.com.br/ws/'+ cep + '/json/');

  }

}
