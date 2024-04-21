import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseApiUrl = 'http://localhost:5213/api';

  constructor(private http: HttpClient) { }

  Register(email : string, password : string): Observable<any>{

    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.get<any>(this.baseApiUrl + 'register', { params });
  }
}

