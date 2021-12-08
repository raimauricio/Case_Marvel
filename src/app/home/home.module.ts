import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ComicBooksComponent } from './comic-books/comic-books.component'
import { HomeRouteRoutes } from './home-route.routing';
import { ProfileComponent } from './profile/profile.component';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    ComicBooksComponent,
    ProfileComponent,
    BookDetailsComponent
  ],
  exports:[HomeComponent],
  imports: [
    CommonModule,
    HomeRouteRoutes,
    MatIconModule
  ]
})
export class HomeModule { }
