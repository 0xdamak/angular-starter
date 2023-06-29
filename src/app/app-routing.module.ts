import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributorsComponent } from './components/contributors/contributors.component';
import { ReposComponent } from './components/repos/repos.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: ReposComponent,
  },
  {
    path: 'contributors/:repo',
    component: ContributorsComponent,
  },
  {
    path: 'user/:name',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
