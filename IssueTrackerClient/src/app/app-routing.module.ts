import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/authGuard';
import { LoginComponent } from './login/login.component';
import { TrackIssuesComponent } from './track-issues/track-issues.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent  },
  { path: 'trackIssues', component: TrackIssuesComponent , canActivate: [AuthGuard] },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
