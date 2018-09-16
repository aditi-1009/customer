import { Component, OnInit,ViewChild } from '@angular/core';
import { AutogridComponent } from '../autogrid/autogrid.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  //Dummy data to be loaded
Items2Load : any = [
  {Key:'1', paramName:'Dummy',
  readType:'Post' ,regEx:'d+',mapValue:'31',priority:2},
  {Key:'2', paramName:'Something',
  readType:'GET' ,regEx:'&^',mapValue:'44',priority:1},
  {Key:'3', paramName:'Hello',
  readType:'JSON' ,regEx:'w+',mapValue:'333',priority:4},
  {Key:'4', paramName:'Goo',
  readType:'XML' ,regEx:'OSOSOS',mapValue:'555',priority:6}];

  Columns2Display : any =[
    {colName: "Key", sortable:true},
    {colName: "paramName", sortable:true},
    {colName: "readType", sortable:false},
    {colName: "regEx", sortable:true},
    {colName: "mapValue", sortable:true},
    {colName: "priority", sortable:true}];
    @ViewChild(AutogridComponent)  private _AutoGrid:AutogridComponent;


  constructor() { }

  ngOnInit() {
    this._AutoGrid.LoadData(this.Items2Load);

  }
  ngAfterViewInit() {
    this._AutoGrid.RowDeleted$.subscribe(c => console.log("I saw you, deleted " + c.Key));
    this._AutoGrid.PageIndexChanged$.subscribe(c=> console.log("New page id " + c));
}

}
