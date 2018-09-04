import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'src/app/custom_modules/dialogModule';
import { IConfirmModel } from 'src/app/shared/class/IConfirmModel';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent extends DialogComponent<IConfirmModel, boolean> implements IConfirmModel {
  option: any;
  title: string;
  message: string;
  showFooter: boolean;
  errorMessage;
  options = [
    // { name: 'OptionA', value: '1', checked: false },
    // { name: 'OptionB', value: '2', checked: true },
    // { name: 'OptionC', value: '3', checked: false }
  ];
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    this.result = true;
    this.close();
  }
  get selectedOptions() { // right now: ['1','3']
    return this.options
      .filter(opt => opt.checked)
      .map(opt => opt.value);
  }
  addOptions() {
    if (this.options.length <= 4) {
      if (this.option != null && this.option !== undefined && this.option !== '') {
        this.errorMessage = '';

        // tslint:disable-next-line:triple-equals
        if (!this.options.some((item) => item.name == this.option)) {
          this.options.push(
            { name: this.option, value: (this.options.length + 1).toString(), checked: false }
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
    const index = this.options.indexOf(questionOption);
    this.options.splice(index, 1);
  }
  onSelectionChange(entry) {
    this.options.forEach(function (item) {
      item.checked = false;
      if (item.value === entry.value) {
        item = entry;
        entry.checked = true;
      }
    });
  }

}
