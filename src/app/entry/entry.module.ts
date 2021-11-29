import { EntryRouteRoutes } from './entry-route.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { EntryComponent } from './entry.component';
import { LoginComponent } from './login/login.component';
import { AccountDataComponent } from './account-data/account-data.component';
import { PaymentDataComponent } from './payment-data/payment-data.component';
import { AddressDataComponent } from './address-data/address-data.component';


@NgModule({

  declarations: [
    EntryComponent,
    LoginComponent,
    AccountDataComponent,
    PaymentDataComponent,
    AddressDataComponent,
  ],

  exports: [EntryComponent],

  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    EntryRouteRoutes
  ]

})

export class EntryModule { }
