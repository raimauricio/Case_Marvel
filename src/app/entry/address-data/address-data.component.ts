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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formAddress = this.formBuilder.group({

      cep:[null, Validators.required],
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
}
