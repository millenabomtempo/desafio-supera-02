import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly baseUrl = "http://localhost:3333/users"

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    
    return this.http.get<User[]>(this.baseUrl)
  }

  getUserById(id: number) {
    
    const url = `${this.baseUrl}/${id}`;
    
    return this.http.get<User>(url).pipe(take(1))

  }

  updateUser(user: User) { 
    const url = `${this.baseUrl}/${user.id}`;
    return this.http.put<User>(url, user)
  }
}
