import { Component } from '@angular/core';
import { User } from './components/registration-form/registration-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-skoleni-app';
  pepa: User;

  constructor() {
    this.pepa = {
      username: 'user1',
      forename: 'Pepa',
      surname: 'Novák'
    };
  }

  addUser(value: User): void {
    console.log('new user', value);
    this.pepa = value;
  }

}
