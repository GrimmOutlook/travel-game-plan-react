import React from 'react';

import ModalSuccess from './modal-success';
import ModalNewItem from './modal-new-item';
import {toggleInfoModal} from '../actions/index';
import {connect} from 'react-redux';

import './css/modal.css';

const SuccessModalContent = modalContent(
  ModalSuccess,
  "Success Text",
  toggleInfoModal
);

const NewItemModalContent = modalContent(
  ModalNewItem,
  "Form Text",
  toggleInfoModal
)

function modalContent(WrappedComponent, randomText, closeModal, props) {
  class ModalHOC extends React.Component {

    exitModal(e){
      e.preventDefault();
      this.props.dispatch(closeModal());

    }

    render() {

      return (
        <div className="modal-parent">
          <div className="modal-box">
            <div className="modal-close" onClick={e => this.exitModal(e)}>X</div>

          <WrappedComponent text={randomText} {...props} />

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

export {SuccessModalContent, NewItemModalContent, modalContent}
