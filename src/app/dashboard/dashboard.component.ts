import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isAdd: any;
  isView: any
  constructor() { }

  ngOnInit() {
  }

  add() {
    this.isAdd = true;
    this.isView = false;
  }

  view() {
    this.isView = true;
    this.isAdd = false;
  }

}
