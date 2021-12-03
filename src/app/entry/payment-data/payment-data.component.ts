import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MarvelService } from './../../services/marvel.service';

@Component({
  selector: 'app-payment-data',
  templateUrl: './payment-data.component.html',
  styleUrls: ['./payment-data.component.css']
})
export class PaymentDataComponent implements OnInit {

  formPayment!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: MarvelService
  ) { }

  ngOnInit(): void {
    this.formPayment = this.formBuilder.group({
      cardNumber:[null, Validators.required],
      validity: [null, Validators.required],
      cvv: [null, Validators.required],
      cardName:[null, Validators.required],
      cpf:[null, Validators.required]

    });
  }


  nextRegistration(){
    const dataPayment = {
      cardNumber: this.formPayment.get('cardNumber')?.value,
      validity: this.formPayment.get('validity')?.value,
      cvv: this.formPayment.get('cvv')?.value,
      cardName: this.formPayment.get('cardName')?.value,
      cpf: this.formPayment.get('cpf')?.value,

    }

    this.service.cadastrandoPayment(dataPayment);
    this.router.navigate(['/address']);
  }

}
