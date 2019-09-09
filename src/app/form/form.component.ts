import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm: FormGroup;
  cache: any;
  id: any;
  goToView: boolean;
  constructor(private formBuilder: FormBuilder, private service: MyServiceService) { 
    this.service.getid().subscribe(data => {
      console.log('here', data);
      this.id = data.id;
      this.cache = data;
      
    })
   
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      mobile : ['', [Validators.required]],
      address : ['', [Validators.required]]

    });
    if(this.cache) {
      this.userForm.get('name').setValue(this.cache.name);
      this.userForm.get('email').setValue(this.cache.email);
      this.userForm.get('mobile').setValue(this.cache.mobile);
      this.userForm.get('address').setValue(this.cache.address);

    }
  }

  saveUser(){
    const payLoad =   {
      name: this.userForm.get('name').value,
      email: this.userForm.get('email').value,
      mobile: this.userForm.get('mobile').value,
      address: this.userForm.get('address').value
    }
    this.service.addData(payLoad).subscribe(res => {
      alert('Successfully added');
      this.goToView = true;
    })
  }

  update() {
    const payLoad =   {
      name: this.userForm.get('name').value,
      email: this.userForm.get('email').value,
      mobile: this.userForm.get('mobile').value,
      address: this.userForm.get('address').value
    }
    this.service.update(this.id, payLoad).subscribe(res => {
     this.goToView = true;
    })
  }



}
