import { Action } from '@ngrx/store';
import { User } from '../models/user.entity';
import { Update } from '@ngrx/entity';

export enum UserActionTypes {
  ADD_USER = '[User] Add User',
  ADD_USER_SUCCESS = '[User] Add User Success',
  ADD_USER_FAIL = '[User] Add User Fail',
  UPDATE_USER = '[User] Update User',
  DELETE_USER = '[User] Delete User',
  UPDATE_CURRENT_USER = '[User] Update Current User',
}

export class AddUser implements Action {
  readonly type = UserActionTypes.ADD_USER;
  constructor(public payload: User) { }
}

export class AddUserSuccess implements Action {
  readonly type = UserActionTypes.ADD_USER_SUCCESS;
  constructor(public payload: User) { }
}

export class AddUserFail implements Action {
  readonly type = UserActionTypes.ADD_USER_FAIL;
  constructor(public payload: string) { }
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.UPDATE_USER;
  constructor(public id: string, public changes: Partial<User>) { }
}

export class DeleteUser implements Action {
  readonly type = UserActionTypes.DELETE_USER;
  constructor(public payload: number) { }
}

export class UpdateCurrentUser implements Action {
  readonly type = UserActionTypes.UPDATE_CURRENT_USER;
  constructor(public payload: User) { }
}

export type UserActions = AddUser
  | AddUserSuccess
  | AddUserFail
  | UpdateUser
  | DeleteUser
  | UpdateUser
  | UpdateCurrentUser;
