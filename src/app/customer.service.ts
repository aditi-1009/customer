import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
//import { catchError, map, tap } from 'rxjs/operators';
import {paymentDetails} from './payment-details';
import {Http,Response,Headers,RequestOptions} from '@angular/http'
//import {Info} from './customer';

import {names} from './names'
import 'rxjs/add/operator/map';



@Injectable()
export class CustomerService {
 public custUrl = 'api/names';
 
  
  constructor(private http:Http) { }

  postData(passed_url,data){
    let headers=new Headers({'Content-type':'application/json'});
    let options=new RequestOptions({headers:headers});
    return this.http.post(passed_url, JSON.stringify(data), options)
    .toPromise()
    .then(res=>{
      res['json']=JSON.parse(res['_body'])
      return res
    })
    .catch(Error=>{
      Error['json']=JSON.parse(Error['_body'])
      return Error
    });
  }

  public get(passed_url)  {
    
    return this.http.get(passed_url)
    .toPromise()
    .then(res=>{
      res['json']=JSON.parse(res['_body'])
      return res
    })
    .catch(Error=>{
     Error['json']=JSON.parse(Error['_body'])
      return Error
    });
    
  }

  
}
