import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { PullRequestComponent } from './pull-request/pull-request.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'user', component: UserComponent},
    {path: 'repo', component: RepoComponent},
    {path: 'pullrequest', component: PullRequestComponent},
    {path: '', redirectTo: 'user', pathMatch: 'full'},
    {path: '**', redirectTo: 'user', pathMatch: 'full'},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
