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
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css']
})
export class BillingDetailsComponent implements OnInit {

  
  myControl = new FormControl();
  customers:customer[] = [];
  billingList:billing[] =[];
  filteredCustomers!: Observable<customer[]>;
  selectedCustomer!: customer;
  displayedColumns: string[] = ['month', 'year', 'amount', 'dues', 'total', 'amountPaid', 'qno'];
  dataSource=this.billingList;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

    this.getCustomers();
    
    this.filteredCustomers = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value: value.name),
        map(name => name ? this._filter(name) : this.customers.slice())
      );
  }

  displayFn(custs: customer): string {
    this.selectedCustomer=custs;
    return custs && custs.name ? custs.name : '';
  }

  public addCustomer(customertoAdd:customer)
  {
      this.selectedCustomer=customertoAdd;
      this.billingList=JSON.parse(JSON.stringify(customertoAdd.billingList));
      
  }
 
   //this.billList = this.selectedCustomer.billingList;
  
  private _filter(name: string): customer[] {
    
    const filterValue = name.toLowerCase();

    return this.customers.filter(cust => cust.name!.toLowerCase().indexOf(filterValue) === 0);
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
