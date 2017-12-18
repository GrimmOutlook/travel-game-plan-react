import React from 'react';

import ModalSuccess from './modal-success';
import ModalForm from './modal-form';

const SuccessModalContent = modalContent(
  ModalSuccess,
  "Success Text"
);

const FormModalContent = modalContent(
  ModalForm,
  "Form Text"
)


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
