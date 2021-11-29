import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AddressDataComponent } from './address-data/address-data.component';
import { PaymentDataComponent } from './payment-data/payment-data.component';
import { AccountDataComponent } from './account-data/account-data.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'account', component: AccountDataComponent},
  {path:'payment', component: PaymentDataComponent},
  {path:'address', component: AddressDataComponent},
  {path:'', component: LoginComponent},
  {path:'**', component: LoginComponent}
];

export const EntryRouteRoutes = RouterModule.forChild(routes);
