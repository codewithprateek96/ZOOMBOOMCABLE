import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { customer } from 'src/app/model/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private _snackBar: MatSnackBar,
    private route: Router
    ) { }

  ngOnInit(): void {
  }

  customer: customer = new customer();

  addCustomer()
  {
    
    //calling add Customer function coming from CustomerService
    this.customer.billingList=[];
    this.customerService.addCustomer(this.customer).subscribe(
      (data: customer) => {
        //success function needs to be called here
        console.log(this.customer);
        this._snackBar.open("Customer Created",'', {
          duration:3000
        });

      },
      (error) => {
        //if failure then this fucntion needs to be called.
        console.log(error);
        alert('Something went wrong');
      }
    )
  }
  billingDetails()
  {
    this.route.navigate(['/billing']);
  }

}