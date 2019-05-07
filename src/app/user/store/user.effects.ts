import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from '../user.service';
import * as fromUser from './user.actions'
import { mergeMap, map, catchError, tap } from 'rxjs/operators'
import { EMPTY } from 'rxjs';



@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService) { }

  @Effect()
  addUser$ = this.actions$
    .pipe(
      ofType(fromUser.UserActionTypes.ADD_USER),
      mergeMap((action: fromUser.AddUser) => this.userService.addUser(action.payload).pipe(
        map(user => new fromUser.AddUserSuccess(user)),
        catchError(error => { console.log("Add user error"); return EMPTY })
      ))
    )

  @Effect()
  removeUse$ = this.actions$
    .pipe(
      ofType(fromUser.UserActionTypes.DELETE_USER),
      mergeMap((action: fromUser.DeleteUser) => this.userService.removeUser(action.payload).pipe(
        map(() => { console.log(action.payload); return new fromUser.DeleteUserSuccess(action.payload) })
      ))
    )

}
