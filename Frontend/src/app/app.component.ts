import { Component } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Frontend';
  constructor() { }


  openModal(): void {
    $('#FindTrainerModal').modal('show');
  }
}
