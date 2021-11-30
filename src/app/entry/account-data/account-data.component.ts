import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.css']
})
export class AccountDataComponent implements OnInit {

  pass = 'visibility';
  typePass = 'password';
  formAccount!: FormGroup;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formAccount = this.formBuilder.group({
      nickname:[null, [Validators.required]],
      firstName:[null, [Validators.required]],
      lastName:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]],
      contact:[null, [Validators.required]],
      password:[null, [Validators.required]]
    })
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

  nextRegistration(){
    this.router.navigate(['/payment']);
  }

}
