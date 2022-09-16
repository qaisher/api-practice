import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //userModel = {} as User;

  constructor(private apiService: ApiServiceService, private router: Router, private toastr: ToastrService, private fb: FormBuilder, private http: HttpClient) { }

  // userForm = new FormGroup({
  //   title: new FormControl(''),
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   gender: new FormControl(''),
  //   email: new FormControl(''),
  //   dob: new FormControl(''),
  //   phone: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     country: new FormControl('')
  //   })
  // });


  userForm = this.fb.group({
    title: [''],
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    gender: [''],
    email: ['', Validators.required],
    dateOfBirth: [''],
    phone: [''],
    picture: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      country: ['']
    })
  });


  handleFileSelect(evt: any) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  base64textString = '';


  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    //console.log(btoa(binaryString));
    
  }

  uploadAPI(){
    const myParams = new HttpParams()
    .set('key', '6d207e02198a847aa98d0a2a901485a5')
    .set('action', 'upload')
    .set('source', this.base64textString)
    .set('format', 'json');

    console.log(this.base64textString);
    this.http.post<any>('https://freeimage.host/api/1/upload', null)
    .subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

    const body = this.userForm.value;
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

    //for jsonplaceholder
    // const postBody = {
    //   name : body.name,
    //   username : body.username,
    //   email : body.email
    // };

    console.log(postBody);

    this.apiService.createUser(postBody)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['../data-table']);
        this.toastr.success('user added', 'success');
      }, (err) => {
        console.log(err.error['data']);
        //this.toastr.error(err.error['data'].keys);
        this.toastr.error('form incompleter or email already exists', 'error');
      })


  }

}
