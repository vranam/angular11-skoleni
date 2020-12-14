import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RegistrationFormComponent} from './components/registration-form/registration-form.component';
import {ExampleServiceService} from './service/example-service.service';
import { NumbersPipe } from './pipes/numbers.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    NumbersPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ExampleServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
