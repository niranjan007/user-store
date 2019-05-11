import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.entity';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = "http://localhost:8080/"

  res: User;

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.uri + "user", user);
  }

  removeUser(id: number) : Observable<any> {
    return this.http.delete(this.uri + "user/" + id);
  }

  update(user: User) {
    this.http.put(this.uri + "user", user);
  }

  getAllUsers() : Observable<Array<User>>{
    return this.http.get<Array<User>>(this.uri + "users");
  }

}
