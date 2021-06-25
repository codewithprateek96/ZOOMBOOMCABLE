import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'qno', 'nuid', 'status', 'mobile', 'street'];
  customers:customer[] = [];
  dataSource = this.customers;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private customerService: CustomerService,
    ) { }

  ngOnInit(): void {
    this.getCustomers();
  }











  getCustomers()
  {
    console.log('All customers component get customers method called');
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

const datas: customer[] =[
  {name:'Prateek', qno:'A', nuid:'b', status:'A', mobile:12, street:'a', billingList:[]}
]
