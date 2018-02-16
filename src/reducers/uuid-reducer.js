import {STORE_INVITE_UUID, FETCH_TRIP_NAME_SUCCESS, FETCH_TRIP_NAME_ERROR, ADD_INVITE_TRIP_SUCCESS} from '../actions/index';

const initialState = {
  inviteUUID: null,
  tripName: null,
  error: ''
};

export const uuidReducer = (state=initialState, action) => {
  if (action.type === STORE_INVITE_UUID){
    return Object.assign({}, state, {
      inviteUUID: action.inviteUUID
    });
  }
  else if (action.type === FETCH_TRIP_NAME_SUCCESS){
    return Object.assign({}, state, {
      inviteUUID: action.inviteUUID,
      tripName: action.tripName
    });
  }
  else if (action.type === FETCH_TRIP_NAME_ERROR){
    return Object.assign({}, state, {
      error: action.error
    });
  }
  else if (action.type === ADD_INVITE_TRIP_SUCCESS){
    return Object.assign({}, state, {
      inviteUUID: null
    });
  }
  return state;
};

export default uuidReducer;
