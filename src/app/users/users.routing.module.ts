import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

const usersRoutes: Routes = [
  { path: 'users', component: UsersComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
