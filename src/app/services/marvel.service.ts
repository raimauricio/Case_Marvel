import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

import { Perfil } from './../interfaces/perfil.component';

@Injectable({
  providedIn: 'root'
})

export class MarvelService {

  nickname =''; firstname =''; lastname='';email=''; contact=''; password='';cardnumber='' ; validity=0;
  cvv=0; cardname=''; cardcpf='';cep=0;address='';addressnumber=0;complement='';district='';city='';
  static qtdPerfilReg = 1;
  marvelUrl = environment.marvelUrl;
  idBook!: number;
  perfilLogado!: Perfil;



  //Banco de dados Perfil
  perfis: Perfil[] = [
    {id:0, nickname:'admin',firstName:'', lastName:'', email:'', contact:'', password:'admin', cardNumber:''
    , validity:0, cvv:0, cardName: '', cardCpf:'', cep: 0, address:'', addressNumber: 0, complement: '',
    district:'', city:''},
    {id:3, nickname:'manas',firstName:'Manoelito', lastName:'Batista', email:'manas.batista@hotmail.com', contact:'13988997766', password:'manas1970', cardNumber:'1233445566778899'
    , validity:1225, cvv:0, cardName: 'Manoelito N Batista', cardCpf:'22233344455', cep: 4052030, address:'Rua de Algum lugar', addressNumber: 100, complement: 'Ap 2',
    district:'Sampa', city:'Praia Grande'},
  ];



  constructor(protected http: HttpClient) { }


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
          this.perfilLogado = this.perfis[i];
          logou = true
          break
        }else{

          logou = false;
        }
      }else{
        logou = false;
      }
    }


    return logou;
  }

  getPerfilLogado(){
    return this.perfilLogado;
  }

  getComicBooks(){

    const timestamp = new Date().getTime().toString();
    const publicKey = "17be704dbf350a84fe802782c92112fe";
    const privateKey = "9d9c14f2a63ae44d4cae8190d678396a4aab4579";
    const md5 = new Md5();
    const hash = md5.appendStr(timestamp+privateKey+publicKey).end();

    return this.http.get<any>(`${this.marvelUrl}/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    })

  }

  setDetailsBook(id: number){
    this.idBook = id;
  }

  getBookDetails(){
    return this.idBook;
  }

}
