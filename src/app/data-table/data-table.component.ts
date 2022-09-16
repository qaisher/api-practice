import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router, Route } from '@angular/router';
import { UpdateFormComponent } from '../update-form/update-form.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  usersList : any = [];
  response : Object = {};
  page : number = 1;
  itemsPerPage = 5;

  constructor(private apiService: ApiServiceService, private router: Router, private updateFormComponent: UpdateFormComponent, private toastr: ToastrService) { }

  ngOnInit(): void {
    
    this.fetchData();
    
  }
  
  fetchData(){
    const data = this.apiService.getAllData()
    .subscribe(data => {
      console.log(Object.values(data)[0]);

      // this.response = data;

    //for dummyapi.io
      this.usersList = Object.values(data)[0];

    //for jsonplaceholder
      //this.usersList = data;
    })
  }

  deleteUser(userId: any, firstName:string, lastName:string){
    console.log('delete clicked');
    console.log(userId);
    console.log(firstName, lastName);
    if(confirm(`Are you sure want to delete ${firstName.toUpperCase()} ${lastName.toUpperCase()}?`))
    {
      this.apiService.deleteUser(userId).subscribe(data => {
        
        this.toastr.success('user deleted', 'deleted');
        this.fetchData();
      });
    }
    
  }

  gotoUpdateForm(userId: any){
    this.router.navigate(['/updateForm', userId]);
    //this.updateFormComponent.ngOnChanges(userId); //6314e240956d86c7e96b86bb
  }

  onPageChange(event: any){

    console.log(event);
    this.page = event;
    this.fetchData();
  }

}
