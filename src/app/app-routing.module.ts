import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampletypeComponent } from './form/sampletype/sampletype.component';
import { TestForm } from './form/test/test.component';
import { UnitComponent } from './form/unit/unit.component';
import { LoginComponent } from './login/login.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SamplesComponent } from './pages/samples/samples.component';
import { Test } from './pages/test/test.component';
import { TestsComponent } from './pages/tests/tests.component';
import { TypesComponent } from './pages/types/types.component';
import { TestUpdate } from './pages/update/test/test.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'testForm', component: TestForm },
  { path: 'clients', component: ClientsComponent },
  { path: 'test', component: TestsComponent },
  { path: 'samples', component: SamplesComponent },
  { path: 'types', component: TypesComponent },
  { path: 'sampleTypeForm', component: SampletypeComponent },
  { path: 'unitForm', component: UnitComponent },
  { path: 'consult/:id', component: Test },
  { path: 'update/:id', component: TestUpdate },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
