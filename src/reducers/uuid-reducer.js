import {STORE_INVITE_UUID, FETCH_TRIP_NAME_SUCCESS} from '../actions/index';

const initialState = {
  inviteUUID: null,
  tripName: null
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
  return state;
};

export default uuidReducer;
