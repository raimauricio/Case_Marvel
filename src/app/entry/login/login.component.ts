import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {


  pass = 'visibility';
  typePass = 'password';

  constructor(

  ) { }

  ngOnInit(): void {}

  verSenha(){

    if(this.pass == 'visibility'){

      this.pass = 'visibility_off';
      this.typePass = 'text'

    }else{

      this.pass='visibility';
      this.typePass = 'password'

    }
  }
}
