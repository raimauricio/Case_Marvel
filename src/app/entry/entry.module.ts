import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { EntryComponent } from './entry.component';
import { LoginComponent } from './login/login.component';
import { AccountDataComponent } from './account-data/account-data.component';


@NgModule({

  declarations: [
    EntryComponent,
    LoginComponent,
    AccountDataComponent
  ],

  exports: [EntryComponent],

  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ]

})

export class EntryModule { }
