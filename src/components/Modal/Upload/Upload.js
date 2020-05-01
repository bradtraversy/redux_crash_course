import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Modal} from "react-bootstrap";
import {TOGGLE_UPLOAD} from '../../../actions/types'
function Upload() {

    const {upload} = useSelector(state => state.modal)
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch({type:TOGGLE_UPLOAD})
    }
    return (
        <div>
            <Modal show={upload} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Please Upload</Modal.Title>
                </Modal.Header>
                <Modal.Body>Upload Form</Modal.Body>
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

export default Upload;
