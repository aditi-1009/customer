import { Component, OnInit } from '@angular/core';
import {paymentDetails} from '../payment-details';
import {CustomerService} from '../customer.service';
//import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   //info:paymentDetails[]=[]
 public customerName
 public errors
 public Type=[
   {
     name : "Invoice"
   },
   {
     name : "Payment"
   }
 ]
  
 public settledAmount;
 public amount;

  public modeofPayment = [
    {
      name: "Cash on delivery"
    },
    {
      name: "Cheque"
    },
    {
      name : "Debit Card"
    },
    {
      name : "Credit Card"
    }
  ]
  public customerinfo = new CInfo
  
  constructor(private api:CustomerService) {}

  ngOnInit() {
    //this.getCustomer();
  }
  
  submit(){
    console.log(this.customerinfo)
    return this.api.postData("http://localhost:3000", this.customerinfo)
    .then(result => {
      if(result['status'] == 200){
        this.errors = []
        console.log(result['json'])
      }
      else{
        this.errors = result['json']
        console.log(result['json'])
      }
  })
}

}

class CInfo{
    customer_name:string
    type:string
    settled_amount:number
    amount:number
    mode:string
   }

