import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
//import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { CustomerPaymentComponent } from './customer-payment/customer-payment.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import{AppRoutingModule} from './app-routing/app-routing.module';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {CustomerService} from './customer.service';
import {Http, HttpModule} from '@angular/http';
import { MainComponent } from './main/main.component';
import { AutogridComponent } from './autogrid/autogrid.component';
import { SortingPipe } from './sorting.pipe';
//import { MessageComponent } from './message/message.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    CustomerPaymentComponent,
    CustomerDetailComponent,
    MainpageComponent,
    MainComponent,
    AutogridComponent,
    SortingPipe
   ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
  FormsModule,
  HttpClientModule,
  AppRoutingModule,
  HttpModule,
  ReactiveFormsModule
 
  ],
  providers: [InMemoryDataService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
