import React from 'react';

import ModalSuccess from './modal-success';
import ModalForm from './modal-form';
import {toggleInfoModal} from '../actions/index';
import {connect} from 'react-redux';

import './css/modal.css';

const SuccessModalContent = modalContent(
  ModalSuccess,
  "Success Text"
);

const FormModalContent = modalContent(
  ModalForm,
  "Form Text"
)

// const DeleteItem = modalContent(
//    DeleteItemComponentName,
//    "Are you Sure?"
//   )


function modalContent(WrappedComponent, randomText) {
  return class extends React.Component {

    exitModal(e){
      e.preventDefault();
      this.props.dispatch(toggleInfoModal());

    }

    render() {

      return (
        <div className="modal-white">
          <h1 onClick={e => this.exitModal(e)}>X</h1>

          <WrappedComponent text={randomText} />

        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    showModal: state.modal.showModal
  });

  export connect(mapStateToProps)(WrappedComponent);

};

export {SuccessModalContent, FormModalContent}
