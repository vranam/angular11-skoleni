import {Injectable} from '@angular/core';

@Injectable()
export class ExampleServiceService {

  constructor() {
  }

  sayHello(): void {
    console.log('Ahoj');
  }
}

