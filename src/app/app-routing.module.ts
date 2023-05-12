import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubmissionsComponent} from './components/submissions/submissions.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'submissions',
    component: SubmissionsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
