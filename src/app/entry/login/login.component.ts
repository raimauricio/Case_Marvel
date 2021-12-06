import { MarvelService } from './../../services/marvel.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;
  pass = 'visibility';
  typePass = 'password';

  constructor(
    private formBuilder: FormBuilder,
    private service : MarvelService

  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      nickname:[null,Validators.required],
      password:[null,Validators.required]
    });
  }

  verSenha(){

    if(this.pass == 'visibility'){

      this.pass = 'visibility_off';
      this.typePass = 'text'

    }else{

      this.pass='visibility';
      this.typePass = 'password'

    }
  }

  enter(){
    let nickname = this.formLogin.get('nickname')?.value;
    let password = this.formLogin.get('password')?.value;

    console.log(this.service.logar(nickname, password));
  }

}
