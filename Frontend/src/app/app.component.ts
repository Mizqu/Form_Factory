import { Component, OnInit} from '@angular/core';
import * as bootstrap from 'bootstrap';
import { ApiService } from './Services/TrainersAPIService'; 
import { Discipline } from './Models/Discipline';
import { DisciplinesAPIService } from './Services/DisciplinesAPIService'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'Frontend';
  private TrainerModal: bootstrap.Modal | undefined;
  disciplines: Discipline[] = [];

  request: any = {
    firstName: '',
    lastName: '',
    city: '',
    disciplineId: ''
  };

  constructor(private apiService: ApiService, private DisciplinesApiService: DisciplinesAPIService) { }

  ngOnInit(): void {
    this.DisciplinesApiService.sendGetRequest().subscribe(
      (response: any) => {
        console.log(response);
        this.disciplines = response; 
      },
       error => {
        console.error('Error while fetching disciplines:', error);
      }
    )
    const modalElement = document.getElementById('FindTrainerModal');
    if (modalElement) {
      this.TrainerModal = new bootstrap.Modal(modalElement);
      modalElement.addEventListener('hidden.bs.modal', () => {
        this.clearModal();
      });
    }
  }

  openModal(): void {
    if (this.TrainerModal) {
      this.TrainerModal.show();    
    }
  }

  clearModal(): void {
    if (this.TrainerModal) {
      var NameInput = document.getElementById('Trainer_Name') as HTMLInputElement;
      var CityInput = document.getElementById('City') as HTMLInputElement;
      var FieldInput = document.getElementById('Field') as HTMLInputElement;
      NameInput.value = '';
      CityInput.value = '';
      FieldInput.value = '';
    }
  }
  onSubmit(): void {
    this.apiService.sendRequest(this.request).subscribe(
      response => {
        console.log(response)
      },
      error => {

      }
    );
  }
}

