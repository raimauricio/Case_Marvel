import { MarvelService } from './../../services/marvel.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-address-data',
  templateUrl: './address-data.component.html',
  styleUrls: ['./address-data.component.css']
})
export class AddressDataComponent implements OnInit {

  formAddress! : FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: MarvelService
  ){

  }

  ngOnInit(): void {
    this.formAddress = this.formBuilder.group({

      cep:['', Validators.required],
      address:[null, Validators.required],
      numberAddress:[null, Validators.required],
      complement:[null],
      district:[null, Validators.required],
      city:[null, Validators.required]

    });
  }

  nextRegistration(){
    this.router.navigate(['/login']);
  }

  consultaCep(){
  
    let cep = this.formAddress.get('cep')?.value

    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)) {

        this.service.buscaCep(cep)
        .subscribe(dados => {this.populaCampos(dados)})
      }
    }
  }

  populaCampos(dados: any){
    this.formAddress.patchValue({
      address:dados.logradouro,
      district:dados.bairro,
      city:dados.localidade
    });
  }
}
