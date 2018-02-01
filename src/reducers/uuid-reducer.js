import {STORE_INVITE_UUID, FETCH_TRIP_NAME_SUCCESS, FETCH_TRIP_NAME_ERROR} from '../actions/index';

const initialState = {
  inviteUUID: null,
  tripName: null,
  error: null
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
      error: action.message
    });
  }
  return state;
};

export default uuidReducer;
