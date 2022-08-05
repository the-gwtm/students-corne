import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http : HttpClient) { }

  userRegistration(data : any)
  {
    return this.http.get<string>("https://stucor-jztunnv56-the-gwtm.vercel.app/register", data);
  }

  userLogin(logData : any)
  {
    return this.http.get<string>("https://stucor-jztunnv56-the-gwtm.vercel.app/login", logData)
  }
}
