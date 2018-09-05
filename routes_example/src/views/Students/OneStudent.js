import React from 'react';

const status = {
  0: 'Inactive',
  1: 'Active'
}

export default (props) => <div>
  <p>{props.student.names} {status[props.student.status]}</p>
</div>