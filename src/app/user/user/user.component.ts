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
    fname: "Niranjan",
    lname: "Murthy",
    city: "Sydney"
  }


  users: Observable<any>;
  currentUser: Observable<User>;

  constructor(private store: Store<UserState>, private userService : UserService) { }

  ngOnInit() {

  }

  addUser() {
    this.store.dispatch(new AddUser(this.user));
  }

  updateUser(){
    this.store.dispatch(new UpdateUser( '2', this.user));
  }

  removeUser(user : User) {
   this.store.dispatch(new DeleteUser(user.id));
  }

  displayUsers() {
    this.users = this.userService.getAllUsers();
  }

  displayCurrentUser() {
    this.currentUser.subscribe(user => console.log(user));
  }

}
