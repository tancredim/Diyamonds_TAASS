import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {


    private baseURL = "http://localhost:8080/api/v1/users";
    private baseURL2 = "http://localhost:8080/api/v1/users/add/";

  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<User[]>{
    return this.httpClient.get<[]>(this.baseURL);
  }

  addUser(body: JSON): Observable<Object>{
    return this.httpClient.post(this.baseURL2, body);
  }
}