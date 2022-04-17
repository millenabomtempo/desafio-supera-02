import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private service: UsersService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {

    this.route.params
      .pipe(
        map((params: any) =>params['id']),
        switchMap(id => this.service.getUserById(id))
      )
      .subscribe(user => this.user = user)

    this.form = this.fb.group({
      id: [null],
      name: [null],
      email: [null]
    })

    this.populateForm(this.user)
  }

  populateForm(data: User) {
    this.form.patchValue({
      id: data.id,
      name: data.name,
      email: data.email
    })
  }

  onSubmit() {
    console.log('submit form')
  }


  onCancel() {
    console.log('cancel form')
  }

}
