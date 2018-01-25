import {STORE_INVITE_UUID} from '../actions/index';

const initialState = {
  inviteUUID: null
};

export const uuidReducer = (state=initialState, action) => {
  console.log('In the uuidReducer');
  if (action.type === STORE_INVITE_UUID){
    return Object.assign({}, state, {inviteUUID: action.inviteUUID});
  }
  console.log('action.type does not match');
  console.log('state at end of uuidReducer: ', state);
  return state;
};

export default uuidReducer;
