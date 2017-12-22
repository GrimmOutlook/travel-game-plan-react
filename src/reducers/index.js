import {TOGGLE_INFO_MODAL} from '../actions/index'

const initialState = {showModal: false};

export const modalReducer = (state=initialState, action) => {
    if (action.type === TOGGLE_INFO_MODAL){
      return Object.assign({}, state, {showModal: !state.showModal})
    }
    return state;
};
