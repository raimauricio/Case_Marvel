import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntryComponent } from './entry/entry.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ComicBooksComponent } from './home/comic-books/comic-books.component';

const routes: Routes = [

  {
    path:'home',
    component: HomeComponent,
    children:[
      {path:'', component: ComicBooksComponent}
    ]
  },
  {path:'entry', component: EntryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
