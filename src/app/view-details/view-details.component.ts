import { Component, OnInit } from '@angular/core';
// import {Observable} from 'rxjs/Rx';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  userData: any = [];
  showForm: boolean;
  constructor(private service: MyServiceService, private router: Router) { }

  ngOnInit() {
    this.userData = [];
    this.getData()
  }

  getData() {
    this.userData = []
    this.service.getData().subscribe(res => {
      console.log(res);
      if(res) {
        this.userData =   this.getUnique(res['todos'])
       
      }
      
    })
  }

   getUnique(array){
    var uniqueArray = [];
    
    // Loop through array values
    for(let i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

  delete(i) {
      this.service.deleteData(i).subscribe(res=> {
        this.getData()
      })  
  }

  edit(id) {
   this.service.setData(id)
    this.showForm = true;
   
  }

}
