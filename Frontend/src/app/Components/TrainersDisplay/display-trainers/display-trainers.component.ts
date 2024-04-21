import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../../Models/Trainer';
import { TrainersDataService } from '../../../Services/TrainersDataService'; 

@Component({
  selector: 'app-display-trainers',
  templateUrl: './display-trainers.component.html',
  styleUrl: './display-trainers.component.css'
})
export class DisplayTrainersComponent implements OnInit {

  trainers: Trainer[] = [];
  constructor(private TrainersDataService: TrainersDataService) { }

  ngOnInit(): void {
    this.TrainersDataService.getTrainersData().subscribe(
      trainersData => {
        this.trainers = trainersData; 
      },
      error => {
        console.error('Error while fetching trainers data:', error);
      }
    );
  }
} 
