import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  @Input() user: User;
  @Output() submitUser: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(): void {
    const u: User = {
      username: 'user10',
      forename: 'Yyyyyy',
      surname: 'Xxxxxx',
    };

    this.submitUser.emit(u);
  }
}

export interface User {
  username: string;
  forename: string;
  surname: string;
}

