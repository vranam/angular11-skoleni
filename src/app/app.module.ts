import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ExampleServiceService} from './service/example-service.service';
import { NumbersPipe } from './pipes/numbers.pipe';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersPipe,
    RegistrationFormComponent
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
