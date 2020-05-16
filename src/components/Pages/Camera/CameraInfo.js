import React from 'react';
import './style.css'
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getCamera} from '../../../actions/cameraActions';
import Image from '../../../Helpers/Image'
import {useParams} from 'react-router-dom';

import {createBrowserHistory} from "history";
const history = createBrowserHistory()

const CameraInfo = () => {
    const {currentCamera} = useSelector(state => state.cameras);
    const dispatch = useDispatch();
    const {id} = useParams();
    React.useEffect(() => {
        dispatch(getCamera(id));
    }, [dispatch, currentCamera]);
    return (
        <div>
            <Button onClick={()=>history.go(-2)}>Back</Button>
            <div className="row margin">
                <div className="col-md-8">
                    <Image src={currentCamera.url} width={900}/>
                    <div>
                        <h2>Description</h2>
                        <p>{currentCamera.desc}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <ul className="list-group">
                        <li className="list-group-item"><p>Contact Dealer</p>
                            <Button>Call</Button></li>

                    </ul>
                    <ul className="list-group">
                        <li className="list-group-item"><b>Title : </b>{currentCamera.title}</li>
                        <li className="list-group-item"><b>Desc : </b>{currentCamera.desc}</li>
                        <li className="list-group-item"><b>Brand : </b>{currentCamera.brand}</li>
                        <li className="list-group-item"><b>Model : </b>{currentCamera.model}</li>
                        <li className="list-group-item"><b>Type : </b>{currentCamera.type}</li>
                        <li className="list-group-item"><b>Colour : </b>{currentCamera.colour}</li>
                        <li className="list-group-item"><b>Amount : </b>{currentCamera.price}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CameraInfo;
