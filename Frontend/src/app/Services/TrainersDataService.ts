import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Trainer } from '../Models/Trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainersDataService {
  private trainersDataSubject = new Subject<Trainer[]>();

  constructor() { }

  sendTrainersData(trainersData: Trainer[]): void {
    this.trainersDataSubject.next(trainersData);
  }

  getTrainersData(): Subject<Trainer[]> {
    return this.trainersDataSubject;
  }
}
