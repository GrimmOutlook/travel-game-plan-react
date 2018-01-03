import React from 'react';

import ModalSuccess from './modal-success';
import ModalNewItem from './modal-new-item';
import ModalUpdateItem from './modal-update-item';
import ModalDeleteItem from './modal-delete-item';
import ModalConfirmItem from './modal-confirm-item';
import {toggleInfoModal} from '../actions/index';
import {connect} from 'react-redux';

import './css/modal.css';

const SuccessModalContent = modalContent(
  ModalSuccess,
  "Success Text"
);

const NewItemModalContent = modalContent(
  ModalNewItem,
  "Form Text"
)

const UpdateModalContent = modalContent(
  ModalUpdateItem,
  "Update Text"
);

const DeleteModalContent = modalContent(
  ModalDeleteItem,
  "Delete Text"
)

function modalContent(WrappedComponent, randomText) {
  return class extends React.Component {

    exitModal(e){
      e.preventDefault();
      this.props.dispatch(toggleInfoModal());

    }

    render() {

      return (
        <div className="modal-white">
          <h1 className="modal-close" onClick={e => this.exitModal(e)}>X</h1>

          <WrappedComponent text={randomText} />

        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    showModal: state.modal.showModal
  });

  connect(mapStateToProps)(WrappedComponent);

};

export {SuccessModalContent, NewItemModalContent, UpdateModalContent, DeleteModalContent}
