import {TOGGLE_INFO_MODAL, TOGGLE_UPDATE_MODAL, TOGGLE_DELETE_MODAL} from '../actions/index';

const initialStateModal = {showModal: false,
  showModalDelete: false,
  showModalUpdate: false
};

export const modalReducer = (state=initialStateModal, action) => {
    if (action.type === TOGGLE_INFO_MODAL){
      return Object.assign({}, state, {showModal: !state.showModal})
    }
    else if (action.type === TOGGLE_UPDATE_MODAL){
      return Object.assign({}, state, {showModalUpdate: !state.showModalUpdate})
    }
    else if (action.type === TOGGLE_DELETE_MODAL){
      return Object.assign({}, state, {showModalDelete: !state.showModalDelete})
    }

    return state;
};

export default modalReducer;
