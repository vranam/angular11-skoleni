import { Component, OnInit } from '@angular/core';
import { User } from '../../components/registration-form/registration-form.component';
import { CreateUserRequest, UsersApiService } from '../../service/users-api.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  registrationInProgress: boolean;
  user: User;

  constructor(
    private usersApi: UsersApiService,
  ) { }

  ngOnInit(): void {
  }


  addUser(value: User): void {
    this.registrationInProgress = true;
    const request: CreateUserRequest = {
      username: value.username,
      forename: value.forename,
      surname: value.surname
    };

    this.usersApi.createUser(request).subscribe(
      () => {
        this.registrationInProgress = false;
        this.user = value;
      }
    );
  }

}
