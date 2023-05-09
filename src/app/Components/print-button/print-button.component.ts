import { Component } from '@angular/core';

@Component({
  selector: 'app-print-button',
  templateUrl: './print-button.component.html',
  styleUrls: ['./print-button.component.css']
})
export class PrintButtonComponent {

  onclick(){
    alert('Your screen was printed!')
  }
}
