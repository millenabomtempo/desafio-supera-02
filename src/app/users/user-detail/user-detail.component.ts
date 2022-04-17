import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription, switchMap } from 'rxjs';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User
  subscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UsersService
  ) { }

  ngOnInit(): void {

    this.route.params
      .pipe(
        map((params: any) =>params['id']),
        switchMap(id => this.service.getUserById(id))
      )
      .subscribe(user => this.user = user)
    
  }

  editUser(id: number) {
    this.router.navigate(['users', id, 'edit'])
  }

}
