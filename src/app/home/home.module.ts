import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

import { HomeComponent } from './home.component';
import { ComicBooksComponent } from './comic-books/comic-books.component'
import { HomeRouteRoutes } from './home-route.routing';
import { ProfileComponent } from './profile/profile.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MsgBuyComponent } from './msg-buy/msg-buy.component';



@NgModule({
  declarations: [
    HomeComponent,
    ComicBooksComponent,
    ProfileComponent,
    BookDetailsComponent,
    MsgBuyComponent
  ],
  exports:[HomeComponent],
  imports: [
    CommonModule,
    HomeRouteRoutes,
    MatIconModule,
    NgxMaskModule.forChild()
  ]
})
export class HomeModule { }
