import { Component, OnInit } from '@angular/core';
import {paymentDetails} from '../payment-details';
import {CustomerService} from '../customer.service';
//import {Info} from '../customer';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
 
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'app-customer-payment',
  templateUrl: './customer-payment.component.html',
  styleUrls: ['./customer-payment.component.css']
})
export class CustomerPaymentComponent implements OnInit {
 //info=Info;
 info:paymentDetails[];
 selectedCustomer: paymentDetails;

 //info=Observable<paymentDetails[]>;

 //private searchTerms = new Subject<string>();
  constructor() {
   // this.info=Info;

    
   }

  ngOnInit() {
   // this.getCustomer();
   
   
  }
 /* getCustomer(): void {
    this.customerService.getCustomer()
    .subscribe(info => this.info = info);
  }*/
  onSelect(custinfo: paymentDetails): void {
    this.selectedCustomer = custinfo;
  }

}
