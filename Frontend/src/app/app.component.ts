import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'Frontend';
  private TrainerModal: bootstrap.Modal | undefined;

  constructor() { }

  ngOnInit(): void {
    const modalElement = document.getElementById('FindTrainerModal');
    if (modalElement) {
      this.TrainerModal = new bootstrap.Modal(modalElement);
      modalElement.addEventListener('hidden.bs.modal', () => {
        this.clearModal();
      });
    }
  }

  openModal(): void {
    if (this.TrainerModal ) {
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
}

