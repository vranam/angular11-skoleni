import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() submitUser: EventEmitter<string> = new EventEmitter<string>();

  user: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.submitUser.emit(this.user);
  }

}


