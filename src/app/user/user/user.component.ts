import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState, userAdapter } from '../store/user.reducer'
import { User } from '../models/user.entity';
import { AddUser, DeleteUser, UpdateCurrentUser, UpdateUser, GetUsers } from '../store/user.actions';
import * as fromUser from '../store/user.reducer';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Dictionary } from '@ngrx/entity';

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


  users$: Observable<Array<User>>;
  currentUser: Observable<User>;

  constructor(private store: Store<UserState>, private userService : UserService) { }

  ngOnInit() {
    this.users$ = this.store.select(fromUser.selectAll) ;
    this.users$.subscribe(users => console.log(users));
  }

  addUser() {
    this.store.dispatch(new AddUser(this.user));
  }

  updateUser(){
    //this.store.dispatch(new UpdateUser( '2', this.user));
  }

  removeUser(user : User) {
   this.store.dispatch(new DeleteUser(user.id));
  }

  displayUsers() {
    // this.users = this.userService.getAllUsers();
    this.store.dispatch(new GetUsers())
  }

  displayCurrentUser() {
    this.currentUser.subscribe(user => console.log(user));
  }

}
