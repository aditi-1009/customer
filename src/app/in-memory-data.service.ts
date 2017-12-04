import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {paymentDetails} from './payment-details';

@Injectable()
export class InMemoryDataService {
 // getPaymentdetails=this.getPaymentDetails;
  
  
  detailsArray=[
    { customerId:1, customerName:'Aditi',type:'Invoice',transaction:20000,history:'Settled',modeOfPayment:'Cash on Delivery'  },
    { customerId:2,customerName:'BeeKay',type:'Payment',transaction:10000,history:'Part Payment',modeOfPayment:'Cash on Delivery'  },
    { customerId:1,customerName:'Aditi',type:'Payment',transaction:10000,history:'Part Payment',modeOfPayment:'Cash on Delivery'  },
    { customerId:1,customerName:'Aditi',type:'Payment',transaction:10000,history:'Part Payment',modeOfPayment:'Cash on Delivery'  },
    { customerId:2,customerName:'BeeKay',type:'Invoice',transaction:30000,history:'Pending',modeOfPayment:'Cheque'  },
    { customerId:3,customerName:'John',type:'Invoice',transaction:30000,history:'Pending',modeOfPayment:'Cheque'  },
  
    { customerId:4,customerName:'Smith',type:'Invoice',transaction:30000,history:'Pending',modeOfPayment:'Cheque'  }
];


getPaymentDetails(customerId){
  //Loop over info
  
  let array = this.detailsArray
    let a=[]
    for(let i=0;i < array.length; i++){
      // console.log(info)
      if(parseInt(customerId)==array[i].customerId){
        a.push(array[i])
        
      }
    
      
    }
    //console.log('after a')
  return (a)

  }

  

  constructor() { }

}
