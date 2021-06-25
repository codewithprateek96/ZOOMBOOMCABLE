import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customer } from '../model/customer';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  //addCustomer
  public addCustomer(customer: customer)
  {
    return this.http.post(`${baseUrl}/rest/addCustomer`,customer);
  }

  //updateCustomer
  public updateCustomer(customer: customer)
  {
      return this.http.put(`${baseUrl}/rest/updateCustomer`,customer);
  }

  //deleteCustomer
  public deleteCustomer(customer: customer)
  {
    let reqHeaders = new HttpHeaders({ 'Content-type':'application/json; charset=utf-8'});
    const req = new HttpRequest('DELETE', `${baseUrl}/rest/deleteCustomer`, customer, { reportProgress: true, headers: reqHeaders });
    return this.http.request(req);
  }
  



  //getCustomer
  public getAllCustomer()
  {
    //  return this.http.get(`${baseUrl}/rest/getCustomer`);
    let reqHeaders = new HttpHeaders({ 'Content-type':'application/json; charset=utf-8'});
    const req = new HttpRequest('GET', `${baseUrl}/rest/getCustomer`, null, { reportProgress: true, headers: reqHeaders });
    return this.http.request(req);
  }
}
