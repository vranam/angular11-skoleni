import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL_CREATE_USER = 'https://angular-skoleni-api.herokuapp.com/api/users';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  createUser(data: CreateUserRequest): Observable<any> {
    return this.httpClient.post(URL_CREATE_USER, data);
  }
}

export interface CreateUserRequest {
  username: string;
  forename: string;
  surname: string;
}
