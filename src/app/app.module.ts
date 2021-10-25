import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SampleComponent } from './component/sample/sample.component';
import { TestComponent } from './component/test/test.component';
import { UserComponent } from './pages/user/user.component';
import { SampleForm } from './form/sample/sample.component';
import { TestForm } from './form/test/test.component';
import { SampletypeComponent } from './form/sampletype/sampletype.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientsComponent } from './pages/clients/clients.component';
import { TestsComponent } from './pages/tests/tests.component';
import { SamplesComponent } from './pages/samples/samples.component';
import { TypesComponent } from './pages/types/types.component';
import { UnitComponent } from './form/unit/unit.component';
import { Test } from './pages/test/test.component';
import { TestUpdate } from './pages/update/test/test.component';
import { PageComponent } from './pages/page/page.component';
import { LoginComponent } from './login/login.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:11111/auth',
        realm: 'master',
        clientId: 'front',
      },
      initOptions: {
        onLoad: "check-sso",
        // promiseType: "native",
        // onLoad: 'login-required',
        // checkLoginIframe: false
      },
    });
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SampleComponent,
    TestComponent,
    UserComponent,
    SampleForm,
    TestForm,
    SampletypeComponent,
    ClientsComponent,
    TestsComponent,
    SamplesComponent,
    TypesComponent,
    UnitComponent,
    Test,
    TestUpdate,
    PageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
