import { Action } from '@ngrx/store';
import { User } from '../models/user.entity';
import { Update } from '@ngrx/entity';

export enum UserActionTypes {
  ADD_USER = '[User] Add User',
  ADD_USER_SUCCESS = '[User] Add User Success',
  ADD_USER_FAIL = '[User] Add User Fail',
  UPDATE_USER = '[User] Update User',
  UPDATE_USER_SUCCESS = '[User] Update User Success',
  UPDATE_USER_FAIL = '[User] Update User Fail',
  DELETE_USER = '[User] Delete User',
  DELETE_USER_SUCCESS = '[User] Delete User Success',
  DELETE_USER_FAIL = '[User] Delete User Fail',
  UPDATE_CURRENT_USER = '[User] Update Current User',
  GET_USERS = '[Users] Get Users',
  GET_USERS_SUCCESS = '[Users] Get Users Success',
  GET_USERS_Fail = '[Users] Get Users Fail',
  UPDATE_USERS = '[User] Update Users',
  UPDATE_USERS_SUCCESS = '[User] Update Users Success',
  UPDATE_USERS_FAIL = '[User] Update Users Fail',
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
  constructor(public id: number, public changes: Partial<User>) { }
}

export class UpdateUserSuccess implements Action {
  readonly type = UserActionTypes.UPDATE_USER_SUCCESS;
  constructor(public id: number, public changes: Partial<User>) { }
}

export class UpdateUserFail implements Action {
  readonly type = UserActionTypes.UPDATE_USER_FAIL;
  constructor(public payload : string) { }
}

export class UpdateUsers implements Action {
  readonly type = UserActionTypes.UPDATE_USERS;
  constructor(public payload: Array<User>) { }
}

export class UpdateUsersSuccess implements Action {
  readonly type = UserActionTypes.UPDATE_USERS_SUCCESS;
  constructor(public payload: Array<User>) { }
}

export class UpdateUsersFail implements Action {
  readonly type = UserActionTypes.UPDATE_USERS_FAIL;
  constructor(public payload: Array<User>) { }
}

export class DeleteUser implements Action {
  readonly type = UserActionTypes.DELETE_USER;
  constructor(public payload: number) { }
}

export class DeleteUserSuccess implements Action {
  readonly type = UserActionTypes.DELETE_USER_SUCCESS;
  constructor(public payload: number) { }
}

export class DeleteUserFail implements Action {
  readonly type = UserActionTypes.DELETE_USER_FAIL;
  constructor(public payload: number) { }
}

export class UpdateCurrentUser implements Action {
  readonly type = UserActionTypes.UPDATE_CURRENT_USER;
  constructor(public payload: User) { }
}

export class GetUsers implements Action {
  readonly type = UserActionTypes.GET_USERS;
}

export class GetUsersSuccess implements Action {
  readonly type = UserActionTypes.GET_USERS_SUCCESS;
  constructor(public payload: Array<User>) { }
}

export class GetUsersFail implements Action {
  readonly type = UserActionTypes.GET_USERS_Fail;
  constructor(public payload: string) { }
}

export type UserActions = AddUser
  | AddUserSuccess
  | AddUserFail
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserFail
  | UpdateUsers
  | UpdateUsersSuccess
  | UpdateUsersFail
  | DeleteUser
  | DeleteUserSuccess
  | DeleteUserFail
  | UpdateCurrentUser
  | GetUsers
  | GetUsersSuccess
  | GetUsersFail;
