import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  constructor(private apiService: ApiServiceService, private router: Router, private toastr: ToastrService, private fb: FormBuilder, private route: ActivatedRoute) { }

userId: string = '';

editForm = this.fb.group({
  id: [''],
  title : ['', Validators.required],
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  gender: [''],
  email : [''],
  dateOfBirth: [''],
  phone: [''],
  picture: [''],
  address: this.fb.group({
    street : [''],
    city : [''],
    state : [''],
    country : ['']
  })
});

  autoFillForm(userId: any){
    this.apiService.getUserDataById(userId)
    .subscribe(data => {
      const dob: string = (String(Object.values(data)[7]).split('T')[0]);
      
      this.editForm.setValue({
        id: String(Object.values(data)[0]),
        title : String(Object.values(data)[1]),
        firstName: String(Object.values(data)[2]),
        lastName: String(Object.values(data)[3]),
        gender: String(Object.values(data)[5]),
        email : String(Object.values(data)[6]),
        dateOfBirth: dob,
        phone: String(Object.values(data)[8]),
        picture: String(Object.values(data)[4]),
        address: {
          street : '',
          city : '',
          state : '',
          country : ''
        }
      })
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.autoFillForm(this.userId);
  }

  

  updateUser(){
    const body = this.editForm.value;
    console.log(body);

    //for dummyapi.io
    const postBody = {
      title: body.title,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      gender: body.gender,
      dateOfBirth: body.dateOfBirth,
      picture: body.picture,
      phone: body.phone,
      address: {
        street: body.address?.state,
        city: body.address?.city,
        state: body.address?.state,
        country: body.address?.country
      }
    };
    this.apiService.updateUser(postBody, this.userId)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['../../data-table']);
      this.toastr.success('user updated', 'success');
    }, error => {
      console.log('error');
    });
  }

}
