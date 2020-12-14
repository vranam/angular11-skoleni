import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  @Output() submitUser: EventEmitter<User> = new EventEmitter<User>();

  user: User;

  constructor() {
    this.user = {
      username: '',
      forename: '',
      surname: ''
    };
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.submitUser.emit(this.user);
  }
}

export interface User {
  username: string;
  forename: string;
  surname: string;
}

