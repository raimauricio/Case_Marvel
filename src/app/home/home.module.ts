import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ComicBooksComponent } from './comic-books/comic-books.component'


@NgModule({
  declarations: [HomeComponent, ComicBooksComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
