import React, { Component } from 'react';

class EditStudent extends Component {
  render() {
    return (
      <div className="EditStudent">
        EditStudent {this.props.match.params.id}
      </div>
    );
  }
}

export default EditStudent;
