import { Component, OnInit, Input } from '@angular/core';
//import {Info} from '../customer';
import {paymentDetails} from '../payment-details';
import {customerPaymentDetails} from '../customerpaymentdetails';
import {InMemoryDataService} from '../in-memory-data.service';

import { Router, ActivatedRoute, Params } from '@angular/router'
import { CustomerService } from '../customer.service'


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  info:paymentDetails[];
  @Input() customerId;
  public data
  public payinfo
  public arr:paymentDetails[]
  public detail
  

  //custinfo:paymentDetails;
           
  constructor(private route : ActivatedRoute,
  private service : CustomerService) {
  //this.info=Info;
    this.route.params.subscribe(params => {
      this.customerId = params['id']
    })
    this.load()
   }

  ngOnInit(){
    
  }

  load(){
    return this.service.get("http://localhost:3000/customer/"+this.customerId)
    .then(result => {
      // console.log(result);
      this.detail = result['json'][0]
      console.log(this.detail);        
    })  
  }
}
