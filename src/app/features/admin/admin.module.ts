import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { ReportsComponent } from './reports/reports.component';
import { QuestionComponent } from './questions/question/question.component';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [DashboardComponent, QuestionsComponent, ReportsComponent, QuestionComponent, UsersComponent]
})
export class AdminModule { }
