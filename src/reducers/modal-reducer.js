import {TOGGLE_INFO_MODAL} from '../actions/index'

const initialStateModal = {showModal: false};

export const modalReducer = (state=initialStateModal, action) => {
    if (action.type === TOGGLE_INFO_MODAL){
      return Object.assign({}, state, {showModal: !state.showModal})
    }
    return state;
};

export default modalReducer;
