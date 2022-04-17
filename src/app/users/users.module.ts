import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './users/users.component';
import { UsersRoutingModule } from './users.routing.module';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
