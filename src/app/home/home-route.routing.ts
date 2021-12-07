import { ComicBooksComponent } from './comic-books/comic-books.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      {path:'comic-books', component: ComicBooksComponent},
      {path: '', component:ComicBooksComponent},
      {path: '**', redirectTo:'comic-books', pathMatch:'full'}
    ]
  },
];

export const HomeRouteRoutes = RouterModule.forChild(routes);
