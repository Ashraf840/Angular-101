import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './components/observables/observables.component';
import { SubjectComponent } from './components/subject/subject.component';
import { SubjectAsConsumerComponent } from './components/subject-as-consumer/subject-as-consumer.component';

const routes: Routes = [
  {
    path: 'observable',
    component: ObservablesComponent
  },
  {
    path: 'subject-as-provider',
    component: SubjectComponent
  },
  {
    path: 'subject-as-consumer',
    component: SubjectAsConsumerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
