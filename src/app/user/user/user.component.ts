import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState, userAdapter } from '../store/user.reducer'
import { User } from '../models/user.entity';
import { AddUser, DeleteUser, UpdateCurrentUser, UpdateUser } from '../store/user.actions';
import * as fromUser from '../store/user.reducer';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = {
    id: 1,
    fname: "Niranjan",
    lname: "Murthy",
    city: "Sydney"
  }

  userId: number = 0;

  users: Observable<any>;
  currentUser: Observable<User>;

  constructor(private store: Store<UserState>, private userService : UserService) { }

  ngOnInit() {
    this.users = this.store.select<any>(fromUser.selectTotal);
    this.currentUser = this.store.select<User>(fromUser.currentUser);
  }

  addUser() {
    this.user.id = this.userId;
    this.store.dispatch(new AddUser(this.user));
    this.userId++;
    this.store.dispatch(new UpdateCurrentUser(this.user));
    this.userService.addUser(this.user).subscribe();
  }

  updateUser(){
    this.user.fname = "XXX";
    this.store.dispatch(new UpdateUser( '2', this.user));
  }

  removeUser() {
    this.store.dispatch(new DeleteUser(2));
  }

  displayUsers() {
    this.users.subscribe(users => console.log(users));
  }

  displayCurrentUser() {
    this.currentUser.subscribe(user => console.log(user));
  }

}
