import { Component, OnInit } from '@angular/core';

import { DialogService, DialogComponent } from '../../../../custom_modules/dialogModule';
import { IQuestions } from '../modals/IQuestions';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent extends DialogComponent<IQuestions, boolean> implements IQuestions {

  IOptions: any;
  title: string;
  message: string;
  showFooter: boolean;
  questionName: string;
  id: number;
  option: any;
  errorMessage;
  // options = [];

  constructor(dialogService: DialogService) {
    super(dialogService);

  }
  confirm() {
    this.result = true;
    this.close();
  }
  get selectedOptions() { // right now: ['1','3']
    return this.IOptions
      .filter(opt => opt.checked)
      .map(opt => opt.value);
  }
  addOptions() {
    if (this.IOptions.length <= 4) {
      if (this.option != null && this.option !== undefined && this.option !== '') {
        this.errorMessage = '';

        // tslint:disable-next-line:triple-equals
        if (!this.IOptions.some((item) => item.name == this.option)) {
          this.IOptions.push(
            { name: this.option, value: (this.IOptions.length + 1).toString(), checked: false }
          );
          this.option = '';
        } else {
          this.errorMessage = 'Same option is avaialble ';
        }
      } else {
        this.errorMessage = 'Please Enter Option value';
      }
    } else {
      this.errorMessage = 'You can add max of 5 options';
    }

  }
  removeOption(questionOption) {
    const index = this.IOptions.indexOf(questionOption);
    this.IOptions.splice(index , 1);
  }
  onSelectionChange(entry) {
    this.IOptions.forEach(function (item) {
      item.checked = false;
      if (item.value === entry.value) {
        item = entry;
        entry.checked = true;
      }
    });
  }

}
