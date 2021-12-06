import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Perfil } from './../interfaces/perfil.component';

@Injectable({
  providedIn: 'root'
})

export class MarvelService {

  static qtdPerfilReg = 1;
  perfis: Perfil[] = [
    {id:0, nickname:'admin',firstName:'', lastName:'', email:'', contact:'', password:'admin', cardNumber:''
    , validity:0, cvv:0, cardName: '', cardCpf:'', cep: 0, address:'', addressNumber: 0, complement: '',
    district:'', city:''}
  ];

  nickname =''; firstname =''; lastname='';email=''; contact=''; password='';cardnumber='' ; validity=0;
  cvv=0; cardname=''; cardcpf='';cep=0;address='';addressnumber=0;complement='';district='';city='';

  constructor(private http: HttpClient) { }


  buscaCep(cep: string){

    return this.http.get('https://viacep.com.br/ws/'+ cep + '/json/');

  }

  cadastrandoAccount(perfil: any){

    this.nickname = perfil.nickname;
    this.firstname = perfil.firstname;
    this.lastname = perfil.lastname;
    this.email = perfil.email;
    this.contact = perfil.contact;
    this.password = perfil.password;

  }

  cadastrandoPayment(perfil: any){
    this.cardnumber = perfil.cardNumber;
    this.validity = perfil.validity;
    this.cvv = perfil.cvv;
    this.cardname = perfil.cardName;
    this.cardcpf = perfil.cpf;

  }

  cadastrandoAddress(perfil: any){

    this.cep = perfil.cep;
    this.address = perfil.address;
    this.addressnumber = perfil.numberAddress;
    this.complement= perfil.complement;
    this.district = perfil.district;
    this.city = perfil.city;

    let perfilNovo = {
      id: MarvelService.qtdPerfilReg,
      nickname: this.nickname, firstName: this.firstname, lastName: this.lastname,email: this.email,
      contact: this.contact, password: this.password, cardNumber: this.cardnumber, validity: this.validity,
      cvv: this.cvv, cardName: this.cardname, cardCpf: this.cardcpf, cep: this.cep, address: this.address,
      addressNumber: this.addressnumber, complement: this.complement, district: this.district, city: this.city
    } ;

    this.perfis.push(perfilNovo);
    MarvelService.qtdPerfilReg++;
    console.log(this.perfis);

  }

  logar(nickname: string, password: string){
    let logou;
    for(let i in this.perfis){
      if(nickname === this.perfis[i].nickname){
        if(password == this.perfis[i].password){
          logou = true
        }else{
          logou = false;
        }
      }else{
        logou = false;
      }
    }

    return logou;
  }



}
