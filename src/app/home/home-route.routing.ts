import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { ComicBooksComponent } from './comic-books/comic-books.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      {path:'comic-books', component: ComicBooksComponent},
      {path:'profile', component: ProfileComponent},
      {path:'', component: ComicBooksComponent}
    ]
  }
];

export const HomeRouteRoutes = RouterModule.forChild(routes);
