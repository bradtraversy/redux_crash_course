import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Modal, Tab, Col, Nav, Row} from "react-bootstrap";
import {TOGGLE_UPLOAD} from '../../../actions/types'
import CameraUpload from "./CameraUpload";
import ImagesUpload from "./ImagesUpload";
import GearUpload from "./GearUpload";

function Upload() {

    const {upload} = useSelector(state => state.modal)
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch({type: TOGGLE_UPLOAD})
    }
    return (
        <div>
            <Modal show={upload} onHide={handleClose} size={'lg'}>
                <Modal.Body>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Images</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Camera</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Gears</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <ImagesUpload/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <CameraUpload/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <GearUpload/>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Modal.Body>
            </Modal>
        </div>
);
}

export default Upload;
