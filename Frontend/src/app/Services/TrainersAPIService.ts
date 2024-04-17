import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainersResponse } from '../Models/trainers-response.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5213/api/trainers';

  constructor(private http: HttpClient) { }

  sendRequest(request: any): Observable<TrainersResponse> {
    return this.http.get<any>(this.apiUrl + { params: request });
  }

  }

