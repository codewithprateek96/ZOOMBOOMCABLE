import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule}  from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './pages/customer/customer.component';
import { BillingComponent } from './pages/billing/billing.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { AllCustomersComponent } from './pages/all-customers/all-customers.component';
import { BillingDetailsComponent } from './pages/billing-details/billing-details.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    BillingComponent,
    AllCustomersComponent,
    BillingDetailsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DeleteComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
