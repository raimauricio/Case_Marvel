import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-data',
  templateUrl: './payment-data.component.html',
  styleUrls: ['./payment-data.component.css']
})
export class PaymentDataComponent implements OnInit {

  formPayment!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
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
    this.router.navigate(['/address']);
  }

}
