import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleServiceService } from './service/example-service.service';
import { NumbersPipe } from './pipes/numbers.pipe';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { FormsModule } from '@angular/forms';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersPipe,
    RegistrationFormComponent,
    RegistrationPageComponent,
    ContentPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'content', pathMatch: 'full'},
      { path: 'content', component: ContentPageComponent },
      { path: 'registration', component: RegistrationPageComponent },
    ])
  ],
  providers: [
    ExampleServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
