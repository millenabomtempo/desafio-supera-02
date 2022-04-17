import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const usersRoutes: Routes = [
  { path: 'users', component: UsersComponent,
  children: [
    { path: ':id', component: UserDetailComponent },
  ]
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
