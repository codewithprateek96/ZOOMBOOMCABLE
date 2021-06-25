import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { billing } from 'src/app/model/billing';
import { customer } from 'src/app/model/customer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  myControl = new FormControl();
  customers:customer[] = [];
  billingList:billing  = new billing();
  filteredCustomers!: Observable<customer[]>;
  selectedCustomer!: customer;

  constructor(
    private customerService:CustomerService,
    private snackBar:MatSnackBar
  
  ) { }

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
  }
  
  private _filter(name: string): customer[] {
    
    const filterValue = name.toLowerCase();

    return this.customers.filter(cust => cust.name!.toLowerCase().indexOf(filterValue) === 0);
  }

  deleteCustomer()
  {
    this.customerService.deleteCustomer(this.selectedCustomer).subscribe((event:HttpEvent<any>) => {
      switch(event.type) {
        case(HttpEventType.Sent):
        console.log("Request Sent");
        break;

        case(HttpEventType.Response):
        console.log(event);
        this.snackBar.open("Customer Deleted",'',{
          duration:3000
        })
        break;
      }
    });
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
