import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {CustomerPaymentComponent} from '../customer-payment/customer-payment.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import {MainpageComponent} from '../mainpage/mainpage.component';
import { MainComponent } from '../main/main.component';

const routes:Routes=[
  {path:'',redirectTo:'/customer-payment',pathMatch:'full'},
  {path:'',redirectTo:'/mainpage',pathMatch:'full'},
  {path:'mainpage',component:MainpageComponent},
  {path:'dashboard',component:DashboardComponent},
  { path:'customer-payment',component:CustomerPaymentComponent},
  {path:'',redirectTo:'/customer-detail',pathMatch:'full'},
  { path:'customer/:id', component:CustomerDetailComponent},
  { path:'main', component:MainComponent}

]


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
 // declarations: []
})
export class AppRoutingModule { }
