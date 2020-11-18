import {Button, Modal} from 'react-bootstrap'

function AlertBox(props) {
    return (
        <>
            <Modal
                show={props.detailes.show}
                onHide={props.detailes.handleClose || props.detailes.handleOk}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Alert</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        {props.detailes.text}
                </Modal.Body>
                {props.detailes.handleClose ? <Modal.Footer>
                    <Button variant="secondary" onClick={props.detailes.handleClose}> Cancel </Button>
                    <Button variant="primary" onClick={props.detailes.handleOk}>Submit</Button>
                </Modal.Footer> : <Modal.Footer>
                    <Button variant="primary" onClick={props.detailes.handleOk}>Ok</Button>
                </Modal.Footer>}
            </Modal>
        </>
    )
}

export default AlertBox