
    import { Component, OnInit } from '@angular/core';
    
   import { Observable } from 'rxjs/Observable';
   import { Subject }    from 'rxjs/Subject';
   import { of }         from 'rxjs/observable/of';
    
  // import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
    import {CustomerService} from '../customer.service';
    import {paymentDetails} from '../payment-details';
    import {names} from '../names'
    import {customer_Name} from '../customer-name'
    import "rxjs/add/operator/debounceTime";
    import "rxjs/add/operator/distinctUntilChanged";
    import "rxjs/add/operator/switchMap";
    import { Router } from '@angular/router';
    
    
   
   @Component({
     selector: 'app-search',
     templateUrl: './search.component.html',
     styleUrls: [ './search.component.css' ]
   })
   export class SearchComponent implements OnInit {
    // info: Observable<paymentDetails[]>;
     private searchTerms = new Subject<string>();
     public name;
     public detail;
     selectName :any;
     public key;
     //  custdetail:name
    
     constructor(private service:CustomerService,private router: Router) {
       console.log(customer_Name)
       this.name = customer_Name
     }
    
     search(term: string): void {
       console.log(this.searchTerms)
       this.searchTerms.next(term);
    }
    
    ngOnInit(): void {
    //  this.name = this.searchTerms
    //    .debounceTime(300)
    //    .distinctUntilChanged()
    //    .switchMap(term => this.customerService.searchCustomer(term))
    }

    
    searchCustomer(){
      //console.log('comming here')
      return this.service.get("http://localhost:3000/search/customer?key="+this.key)
      .then(result => {
        this.name = result['json']
      })
    }

    
    /*gotoDetail(custdetail: names) {
      // let link = ['/customer', custdetail.customer_Name];
      // this.router.navigate(link);
      //console.log(custdetail)
      return this.service.get("http://localhost:3000/detail/customer")
      .then(result => {
        console.log(result);
        this.detail = result['json']
        console.log(this.detail);        
      })
    }*/
   
  }