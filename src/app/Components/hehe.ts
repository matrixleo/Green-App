import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  template: `
    <div class="modal-header">
      <h5 class="modal-title">Titulli</h5>
      <button type="button" class="close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <!-- <ng-container [ngSwitch]="contentType">
        <div *ngSwitchCase="'list'" [items]="data"></div>
        <div *ngSwitchCase="'form'" [formData]="data"></div>
        <div *ngSwitchCase="'photos'" [photos]="data"></div> -->
      <!-- </ng-container> --> 
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="closeModal()">Close</button>
      <button type="button" class="btn btn-primary" (click)="save()" *ngIf="showSave">Save</button>
    </div>
  `,
  styles: [
    `
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e9ecef;
      padding: 1rem 1.5rem;
    }
    .modal-title {
      margin: 0;
    }
    .modal-body {
      padding: 1rem 1.5rem;
    }
    .modal-footer {
      display: flex;
      justify-content: flex-end;
      border-top: 1px solid #e9ecef;
      padding: 1rem 1.5rem;
    }
    `
  ]
})
export class ModalDialogComponent implements OnInit {
//   @Input() title: string;
//   @Input() contentType: string;
  @Input() data: any;
  @Input() showSave = false;

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    // logic to close the modal
  }

  save() {
    // logic to save data
  }
}
