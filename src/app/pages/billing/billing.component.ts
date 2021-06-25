import { Component, OnInit } from '@angular/core';
import { billing } from 'src/app/model/billing';
import { customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  myControl = new FormControl();
  customers:customer[] = [];
  billingList:billing  = new billing();
  filteredCustomers!: Observable<customer[]>;
  selectedCustomer!: customer;
  //billList:billing[]=[];
  // selectedCustomer1: customer = new customer();

  constructor(
    private customerService: CustomerService,
    private snackBar:MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getCustomers();
    
    this.filteredCustomers = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value: value.qno),
        map(qno => qno ? this._filter(qno) : this.customers.slice())
      );
    
     
  }
  
  displayFn(custs: customer): string {
    this.selectedCustomer=custs;
    return custs && custs.qno ? custs.qno : '';
  }

  public addCustomer(customertoAdd:customer)
  {
      this.selectedCustomer=customertoAdd;
  }
 
   
  
  private _filter(qno: string): customer[] {
    
    const filterValue = qno.toLowerCase();

    return this.customers.filter(cust => cust.qno!.toLowerCase().indexOf(filterValue) === 0);
  }

  
  addBillingDetails()
  {  
  this.selectedCustomer.billingList!.push(this.billingList);
  alert("Billing Details Entered");
  this.customerService.updateCustomer(this.selectedCustomer).subscribe(
    
    (data: customer) => {
      
      this.snackBar.open("Details Entered",'',{
        duration:3000
      });
      console.log(this.selectedCustomer);
    },
    (error) => {
      console.log(error);
    }
  ) 
  }

  getCustomers()
  {
    this.customerService.getAllCustomer().subscribe((event: HttpEvent<any>) => {
      switch(event.type) {
        case (HttpEventType.Sent):
          console.log("Request Sent");
          break;
        
          case(HttpEventType.Response):
          this.customers = event.body;
          console.log("Received Response");
          console.log(event);
          break;
      }
    });
  }
}
