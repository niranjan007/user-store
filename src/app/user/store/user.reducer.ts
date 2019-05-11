import { Action, createSelector, State } from '@ngrx/store';
import { User } from '../models/user.entity';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import * as fromUserAction from './user.actions';

export interface UserState extends EntityState<User> {
  currentUser: User
}

export const defaultState: UserState = {
  ids: [0],
  entities: {
    0: {
      id: 0,
      fname: "Niranjan",
      lname: "Murthy",
      city: "Sydney"
    }
  },
  currentUser: null
};

export const userAdapter = createEntityAdapter<User>();
export const initialState: UserState = userAdapter.getInitialState(defaultState);

export function userReducer(state = initialState, action: fromUserAction.UserActions): UserState {
  switch (action.type) {

    case fromUserAction.UserActionTypes.ADD_USER:
      return state;

    case fromUserAction.UserActionTypes.ADD_USER_SUCCESS:
      return userAdapter.addOne(action.payload, state);

    case fromUserAction.UserActionTypes.DELETE_USER:
      return state;

    case fromUserAction.UserActionTypes.DELETE_USER_SUCCESS:
      return userAdapter.removeOne(action.payload, state);

    case fromUserAction.UserActionTypes.UPDATE_USER:
      return state;

    case fromUserAction.UserActionTypes.UPDATE_USER_SUCCESS:
      return userAdapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);

    case fromUserAction.UserActionTypes.UPDATE_CURRENT_USER:
      state.currentUser = action.payload;
      return { ...state };

    case fromUserAction.UserActionTypes.UPDATE_USERS:
      return state;
    
    case fromUserAction.UserActionTypes.GET_USERS:
      return state;
    
    case fromUserAction.UserActionTypes.GET_USERS_SUCCESS:
      return userAdapter.upsertMany(action.payload, state);;

    case fromUserAction.UserActionTypes.UPDATE_USERS:
      return state;
    
    case fromUserAction.UserActionTypes.UPDATE_USERS_SUCCESS:
      return userAdapter.upsertMany(action.payload, state);

    default:
      return state;
  }
}

export const usersState = createFeatureSelector<UserState>('users');
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = userAdapter.getSelectors(usersState);

export const currentUser = createSelector(
  usersState,
  (state: UserState) => state.currentUser
);


