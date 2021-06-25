import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCustomersComponent } from './pages/all-customers/all-customers.component';
import { BillingDetailsComponent } from './pages/billing-details/billing-details.component';
import { BillingComponent } from './pages/billing/billing.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'customer',
    component:CustomerComponent,
    pathMatch:'full'
  },
  {
    path:'billing',
    component:BillingComponent,
    pathMatch:'full'
  },
  {
    path:'allCustomers',
    component:AllCustomersComponent,
    pathMatch:'full'
  },
  {
    path:'billingDetails',
    component:BillingDetailsComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'delete',
    component:DeleteComponent,
    pathMatch:'full'
  },
  {
    path:'editCustomer',
    component:EditCustomerComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
