import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http : HttpClient) { }

  userRegistration(data : any)
  {
    return this.http.post<string>("https://stucor.herokuapp.com/register", data);
  }

  userLogin(logData : any)
  {
    return this.http.post<string>("https://stucor.herokuapp.com/login", logData)
  }
}
