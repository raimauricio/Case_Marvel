import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { EntryComponent } from './entry.component';
import { LoginComponent } from './login/login.component';


@NgModule({

  declarations: [
    EntryComponent,
    LoginComponent
  ],

  exports: [EntryComponent],

  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ]

})

export class EntryModule { }
