import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Modal} from "react-bootstrap";
import {TOGGLE_LOGIN} from '../../../actions/types'
function Login() {

    const {login} = useSelector(state => state.modal)
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch({type:TOGGLE_LOGIN})
    }
    return (
        <div>
            <Modal show={login} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Please Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>Login Form</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Login;
