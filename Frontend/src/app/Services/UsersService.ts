import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterRequest } from '../Models/RegisterRequest';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseApiUrl = 'http://localhost:5213/';

  constructor(private http: HttpClient) { }

  Register(registerRequest : RegisterRequest): Observable<any>{
  
    console.log(registerRequest)
    return this.http.post<any>(this.baseApiUrl + 'register' , registerRequest);
  }
}

