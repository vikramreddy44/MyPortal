import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../exam/exam/exam.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions;
  constructor(private _examService: ExamService) { }

  ngOnInit() {
    const exames = this._examService.getAll();
    const examName = exames[1].id;
    this.loadExam(examName);
  }

  loadExam(examName: string) {
    this._examService.get(examName).subscribe(res => {
      this.questions = res;
    },
      err => {
        console.log('error;');
      });

  }

}
