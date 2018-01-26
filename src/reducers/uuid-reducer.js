import {STORE_INVITE_UUID} from '../actions/index';

const initialState = {
  inviteUUID: null
};

export const uuidReducer = (state=initialState, action) => {
  if (action.type === STORE_INVITE_UUID){
    return Object.assign({}, state, {inviteUUID: action.inviteUUID});
  }
  return state;
};

export default uuidReducer;
