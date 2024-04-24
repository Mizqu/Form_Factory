import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { ApiService } from './Services/TrainersAPIService'; 
import { Discipline } from './Models/Discipline';
import { DisciplinesAPIService } from './Services/DisciplinesAPIService';
import { TrainersDataService } from './Services/TrainersDataService';
import { DisplayTrainersComponent } from './Components/TrainersDisplay/display-trainers/display-trainers.component';
import { RegisterRequest } from './Models/RegisterRequest';
import { RegistrationComponent } from './Components/registration/registration.component';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'Frontend';
  private TrainerModal: bootstrap.Modal | undefined;
  disciplines: Discipline[] = [];

  FirstName: string = '';
  LastName: string = '';
  City: string = '';
  disciplineId: string = '';
  registerRequest: RegisterRequest = new RegisterRequest();
  showRegistrationComponent: boolean = false;

  componentRef: any; 
  constructor(private apiService: ApiService, private DisciplinesApiService: DisciplinesAPIService,
    private TrainersDataService: TrainersDataService, private ViewContainerRef: ViewContainerRef) { }

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

  public addDisplayTrainersComponent(): void {
    if (this.componentRef) {
      this.componentRef.destroy(); 
    }
    this.componentRef = this.ViewContainerRef.createComponent(DisplayTrainersComponent);
  }


  onSubmit(): void {
    this.apiService.SendGetRequest(this.FirstName, this.LastName, this.City, this.disciplineId).subscribe(
      response => {
        this.TrainersDataService.sendTrainersData(response);
        this.addDisplayTrainersComponent();
      },
      error => {
        console.log(error)
      }
    );
  }
  public addRegistrationComponent(): void
  {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    this.showRegistrationComponent = true;
    this.componentRef = this.ViewContainerRef.createComponent(RegistrationComponent);
  }
}


