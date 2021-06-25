import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit(): void {
  }

  createCustomer()
  {
    this.route.navigate(['/customer']);
  }

  customerList()
  {
    this.route.navigate(['allCustomers']);
  }
  editCustomer()
  {
    this.route.navigate(['/editCustomer']);
  }
  billingDetails()
  {
    this.route.navigate(['/billing']);
  }
  viewBillingDetails()
  {
    this.route.navigate(['/billingDetails']);
  }
  deleteCustomer()
  {
    this.route.navigate(['/delete']);
  }

}
