import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Trainer } from '../Models/Trainer';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5213/api/trainers';


  constructor(private http: HttpClient) { }

  SendGetRequest(FirstName: string, LastName: string, City: string, disciplineId: string): Observable<Trainer[]> {

    const params = new HttpParams()
      .set('firstName', FirstName)
      .set('lastName', LastName)
      .set('city', City)
      .set('disciplineId', disciplineId);

    return this.http.get<any[]>(this.apiUrl, { params }).pipe(
      map(response => {
        return response.map(item => ({
          UserId: item.userId,
          FirstName: item.firstName,
          LastName: item.lastName,
          CityOfWork: item.cityOfWork,
          isRemoteAllowed: item.isRemoteAllowed,
          DisciplinesIds: item.disciplinesIds,
          Rate: item.rate,
          Bio: item.bio
        }));
      })
    );
  }
}

