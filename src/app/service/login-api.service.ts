import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL_LOGIN = 'https://angular-skoleni-api.herokuapp.com/api/login';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }


  login(username: string): Observable<string> {
    const params: HttpParams = new HttpParams()
      .set('username', username);
    return this.httpClient.post(URL_LOGIN, undefined, {params, responseType: 'text'});
  }
}
