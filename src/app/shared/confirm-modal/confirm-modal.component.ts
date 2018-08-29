import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from '../../custom_modules/dialogModule';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  showFooter: boolean;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    this.result = true;
    this.close();
  }
}
export interface ConfirmModel {
  title: string;
  message: string;
  showFooter: boolean;
}
