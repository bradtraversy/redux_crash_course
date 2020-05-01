import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Modal} from "react-bootstrap";
import { TOGGLE_SIGNUP} from '../../../actions/types';

function SignUp() {
    const {signUp} = useSelector(state => state.modal)
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch({type:TOGGLE_SIGNUP})
    }
    return (
        <Modal show={signUp} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>SignUp</Modal.Title>
            </Modal.Header>
            <Modal.Body>Please SignUp</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SignUp;
