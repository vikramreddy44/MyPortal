import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ExamService } from '../../exam/exam/exam.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  characters: Table[];
  constructor(private _userService: UserService, private _examService: ExamService) { }

  ngOnInit() {
    this
    ._userService
    .getCharacters()
    .subscribe((data: Table[]) => {
      this.characters = data;
  });
  }



  // tslint:disable-next-line:member-ordering
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      age: {
        title: 'Age'
      }
    }
  };
}

export interface Table {
  id: Number;
  name: String;
  age: Number;
}
