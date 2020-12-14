import { Component, OnInit } from '@angular/core';
import { User } from '../../components/registration-form/registration-form.component';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  addUser(value: User): void {
    console.log('new user', value);
  }

}
