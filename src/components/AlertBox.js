import React from 'react'
import {Alert,Button} from 'react-bootstrap'

function AlertBox(props) {
    if (props.detailes.show) {
      return (
        <Alert variant="danger" onClose={() => props.detailes.closeAlert()} dismissible>
          <Alert.Heading>Alert</Alert.Heading>
          <p>
            {props.detailes.text}
          </p>
        </Alert>
      );
    }
}
export default AlertBox
  