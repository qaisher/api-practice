import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private url = environment.baseUrl;  
  

  constructor(private http: HttpClient) { }

  getAllData(): Observable<User[]>{

    //Without interceptor, uncomment the code below:
    // const myHeaders = new HttpHeaders({
    //   'app-id' : '630a758491b126acb900b768'
    // });
  
    // const myParams = new HttpParams()
    // .set('page', '1')
    // .set('limit', '20');

  //for dummyapi.io
  return this.http.get<User[]>('https://dummyapi.io/data/v1/user');//, {headers: myHeaders, params: myParams});

  //for jsonplaceholder
    //return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');

  }

  createUser(body : User): Observable<User[]> {

    //return this.http.post<User>('https://jsonplaceholder.typicode.com/users', body);
    return this.http.post<User[]>('https://dummyapi.io/data/v1/user/create', body);//, {headers: myHeaders, params: myParams});
  }

  deleteUser(userId: any){
    console.log('api called');
    return this.http.delete(`https://dummyapi.io/data/v1/user/${userId}`);
  }

  getUserDataById(userId: any){
    return this.http.get<User[]>(`https://dummyapi.io/data/v1/user/${userId}`);
  }

  updateUser(body: User, userId: any): Observable<User[]> {
    return this.http.put<User[]>(`https://dummyapi.io/data/v1/user/${userId}`, body);
  }




  // uploadImage(base64textString: any){
  //   const myParams = new HttpParams()
  //   .set('key', '6d207e02198a847aa98d0a2a901485a5')
  //   .set('action', 'upload')
  //   .set('source', base64textString)
  //   .set('format', 'json');

  //   console.log(base64textString);
  //   return this.http.post<any>('https://freeimage.host/api/1/upload', null);
  // }

}


//when using jsonplaceholder or dummyapi.io, changes to be accordingly:

// change user.ts
// change form.component.ts
// in form.component.html, line 12 to 26, change:
  // jsonplaceholder <-> dummyapi
  // name <-> firstName
  // username <-> lastName

// change data-table.component.ts
// in data-table.component.html, line 16 to 20, change:
  // jsonplaceholder <-> dummyapi
  // name <-> firstName
  // username <-> lastName