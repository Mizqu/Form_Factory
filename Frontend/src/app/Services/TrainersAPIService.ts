import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from '../Models/Trainer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5213/api/trainers';

  constructor(private http: HttpClient) { }

  getTrainers(request: any): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(`${this.apiUrl}?DisciplineId=${request.DisciplineId}&City=${request.City}&FirstName=${request.FirstName}&LastName=${request.LastName}`);
  }

  createTrainer(request: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, request);

  }
}
