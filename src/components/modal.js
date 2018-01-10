import React from 'react';

import ModalSuccess from './modal-success';
import ModalNewItem from './modal-new-item';
import ModalUpdateItem from './modal-update-item';
import ModalDeleteItem from './modal-delete-item';
// import ModalConfirmItem from './modal-confirm-item';
import {toggleInfoModal, toggleUpdateModal, toggleDeleteModal} from '../actions/index';
import {connect} from 'react-redux';

import './css/modal.css';

const SuccessModalContent = modalContent(
  ModalSuccess,
  "Success Text",
  toggleInfoModal()
);

const NewItemModalContent = modalContent(
  ModalNewItem,
  "Form Text",
  toggleInfoModal()
)

const UpdateModalContent = modalContent(
  ModalUpdateItem,
  "Update Item",
  toggleUpdateModal()
);

const DeleteModalContent = modalContent(
  ModalDeleteItem,
  "Delete This Item",
  // pass which modal to close
  toggleDeleteModal()
)

function modalContent(WrappedComponent, randomText, closeModal) {
  class ModalHOC extends React.Component {

    exitModal(e){
      e.preventDefault();
      this.props.dispatch(closeModal);

    }

    render() {

      return (
        <div className="modal-parent">
          <div className="modal-box">
            <div className="modal-close" onClick={e => this.exitModal(e)}>X</div>

          <WrappedComponent text={randomText} />

          </div>
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    showModal: state.modal.showModal
  });

  return connect(mapStateToProps)(ModalHOC);

};

export {SuccessModalContent, NewItemModalContent, UpdateModalContent, DeleteModalContent}
