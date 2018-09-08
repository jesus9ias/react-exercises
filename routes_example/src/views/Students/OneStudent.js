import React from 'react';
import { Badge } from 'react-bootstrap';

const status = {
  0: 'Inactive',
  1: 'Active'
}

export default (props) => <div class="oneStudent">
  <p>{props.student.names} <Badge>{status[props.student.status]}</Badge></p>
</div>