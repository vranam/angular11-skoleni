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
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './components/article/article.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { EditorPageComponent } from './pages/editor-page/editor-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersPipe,
    RegistrationFormComponent,
    RegistrationPageComponent,
    ContentPageComponent,
    HeaderComponent,
    ArticleComponent,
    LoginPageComponent,
    LoginFormComponent,
    EditorPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'content', pathMatch: 'full'},
      { path: 'content', component: ContentPageComponent },
      { path: 'registration', component: RegistrationPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'editor', component: EditorPageComponent },
    ])
  ],
  providers: [
    ExampleServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
