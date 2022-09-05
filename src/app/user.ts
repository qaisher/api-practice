import 'rxjs/add/operator/catch';
export interface User {
    //for dummyapi.io

    id ?: any,
    firstName: any,
    lastName: any,
    gender?: any,
    email : any,
    dateOfBirth?: any,
    phone?: any,
    address?: {
      street: any,
      city: any,
      state: any,
      country: any,
    picture ?: any
    }
    


    //for jsonplaceholder

    // id ?: string,
    // name: string,
    // username: string,
    // email: string
}