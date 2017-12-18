import React from 'react';

export default class ModalForm extends React.Component {
  render(props) {
    return (
      <div>
        <div>This is the Form Modal</div>
        <p>This is the prop from the HOC: {this.props.text}</p>
      </div>

    );
  }
};
