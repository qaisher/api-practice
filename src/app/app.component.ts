import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-practice';

  // usersList : any = [];
  // response : Object = {};

  constructor(private apiService: ApiServiceService) {}

  // fetchData(){
  //   const data = this.apiService.getData()
  //   .subscribe(data => {
  //     console.log(data);
  //     this.usersList = data;
  //     // this.response = data;
  //     // this.usersList = Object.values(this.response)[0];
  //   })
  // }


}
