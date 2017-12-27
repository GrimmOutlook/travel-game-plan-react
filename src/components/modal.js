import React from 'react';

import ModalSuccess from './modal-success';
import ModalForm from './modal-form';

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

    render() {

      return (
        <div className="modal-white">
          <p>Here is an X to close the Modal</p>

          <WrappedComponent text={randomText} />

        </div>
      );
    }
  }
};

export {SuccessModalContent, FormModalContent}
