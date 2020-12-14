import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleServiceService } from './service/example-service.service';
import { NumbersPipe } from './pipes/numbers.pipe';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NumbersPipe,
    RegistrationFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    ExampleServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
