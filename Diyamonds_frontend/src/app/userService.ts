import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {


    private baseURL = "http://localhost:8083/api/v1/ms1/users";
    private baseURL2 = "http://localhost:8083/api/v1/ms1/users/add/";

  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<User[]>{
    return this.httpClient.get<[]>(this.baseURL);
  }

  getAllUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseURL);
  }

  addUser(body: JSON): Observable<Object>{
    return this.httpClient.post(this.baseURL2, body);
  }
}