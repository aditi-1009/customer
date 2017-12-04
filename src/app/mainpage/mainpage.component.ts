import { Component, OnInit } from '@angular/core';

import {customerPaymentDetails} from '../customerpaymentdetails';
import {Details} from '../paymentInformation';
//import {Info} from '../customer';
import{paymentDetails} from '../payment-details'
import {HttpClient} from '@angular/common/http'
//import {CustomerService} from '../customer.service'
import {CustomerService} from '../customer.service'

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  info:paymentDetails[];
  details:customerPaymentDetails[];
  selectCustomer :any;
  public data
  constructor( private service:CustomerService) {
   // this.info=Info;
    this.details=Details;
  }

  
  ngOnInit():void {
    
  }

  onSelection(payinfo: customerPaymentDetails) {
    // console.log(payinfo)
    this.selectCustomer = payinfo;
  }
}
