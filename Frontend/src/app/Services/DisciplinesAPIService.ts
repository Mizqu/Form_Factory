import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Discipline } from '../Models/Discipline';


@Injectable({
  providedIn: 'root'
})
export class DisciplinesAPIService {
  private apiUrl = 'http://localhost:5213/api/disciplines';

  constructor(private http: HttpClient) { }

  sendGetRequest(): Observable<Discipline[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(response => {
        return response.map(item => ({
          id: item.id,
          name: item.name
        }));
      })
    );
  }
}
