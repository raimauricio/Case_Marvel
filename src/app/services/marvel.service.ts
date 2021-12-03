import { HttpClient } from '@angular/common/http';
import { Perfil } from './../interfaces/perfil.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MarvelService {

  perfis: Perfil[] = [
    {nickname:'admin',firstName:'', lastName:'', email:'', contact:'', password:'admin', cardNumber:''
    , validity:0, cvv:0, cardName: '', cardCpf:'', cep: 0, address:'', addressNumber: 0, complement: '',
    district:'', city:''}
  ];

  perfilTemp = {nickname:'',firstName:'', lastName:'', email:'', contact:'', password:'', cardNumber:''
    , validity:0, cvv:0, cardName: '', cardCpf:'', cep: 0, address:'', addressNumber: 0, complement: '',
    district:'', city:'' };

  constructor(private http: HttpClient) { }


  buscaCep(cep: string){

    return this.http.get('https://viacep.com.br/ws/'+ cep + '/json/');

  }

  cadastrandoAccount(perfil: any){
    this.perfilTemp.nickname = perfil.nickname;
    this.perfilTemp.firstName = perfil.firstname;
    this.perfilTemp.lastName = perfil.lastname;
    this.perfilTemp.email = perfil.email;
    this.perfilTemp.contact = perfil.contact;
    this.perfilTemp.password = perfil.password;

  }

  cadastrandoPayment(perfil: any){
    this.perfilTemp.cardNumber = perfil.cardNumber;
    this.perfilTemp.validity = perfil.validity;
    this.perfilTemp.cvv = perfil.cvv;
    this.perfilTemp.cardName = perfil.cardName;
    this.perfilTemp.cardCpf = perfil.cpf;

  }

  cadastrandoAddress(perfil: any){
    this.perfilTemp.cep = perfil.cep;
    this.perfilTemp.address = perfil.address;
    this.perfilTemp.addressNumber = perfil.numberAddress;
    this.perfilTemp.complement= perfil.complement;
    this.perfilTemp.district = perfil.district;
    this.perfilTemp.city = perfil.city;

    this.perfis.push(this.perfilTemp);

  }



}
