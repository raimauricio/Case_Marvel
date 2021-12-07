import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ComicBooksComponent } from './comic-books/comic-books.component'
import { HomeRouteRoutes } from './home-route.routing';


@NgModule({
  declarations: [HomeComponent, ComicBooksComponent],
  imports: [
    CommonModule,
    HomeRouteRoutes
  ]
})
export class HomeModule { }
