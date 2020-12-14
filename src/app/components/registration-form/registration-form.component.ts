import { Component, OnInit } from '@angular/core';
import {ExampleServiceService} from '../../service/example-service.service';

@Component({
  selector: 'app-registration-form',
  template: `
    <p>{{namew}}</p>
    {{cislo | numbers}}

    <button (click)="onClick()">Say hello</button>

  `,
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  namew = 'Adam';
  cislo = 6;

  constructor(
    private exampleService: ExampleServiceService,
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.exampleService.sayHello();
    this.namew = 'Eva';
  }

}
