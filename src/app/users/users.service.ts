import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

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
}
