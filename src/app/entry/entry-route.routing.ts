import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AddressDataComponent } from './address-data/address-data.component';
import { PaymentDataComponent } from './payment-data/payment-data.component';
import { AccountDataComponent } from './account-data/account-data.component';
import { EntryComponent } from './entry.component';

const routes: Routes = [
  {
    path:'',
    component: EntryComponent,
    children:[
      {path:'login', component: LoginComponent},
      {path:'account', component: AccountDataComponent},
      {path:'payment', component: PaymentDataComponent},
      {path:'address', component: AddressDataComponent},
      {path: '', component: LoginComponent},
      {path: '**', redirectTo:'login', pathMatch:'full'}
    ]
  }

];

export const EntryRouteRoutes = RouterModule.forChild(routes);
