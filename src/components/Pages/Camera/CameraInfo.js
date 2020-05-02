import React from 'react';
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {getCamera} from '../../../actions/cameraActions';
import Image from '../../../Helpers/Image'
import {useParams} from 'react-router-dom';

const CameraInfo = () => {
    const {currentCamera} = useSelector(state => state.cameras);
    const dispatch = useDispatch();
    const {id} = useParams();
    React.useEffect(() => {
        dispatch(getCamera(id));
    }, [dispatch, currentCamera]);
    return (
        <div className="row">
            <div className="col-md-8">
                <Image src={currentCamera.url} width={900}/>
            </div>
            <div className="col-md-4">
                <ul className="list-group">
                    <li className="list-group-item"><b>Title : </b>{currentCamera.title}</li>
                    <li className="list-group-item"><b>Desc : </b>{currentCamera.desc}</li>
                    <li className="list-group-item"><b>Brand : </b>{currentCamera.brand}</li>
                    <li className="list-group-item"><b>Model : </b>{currentCamera.model}</li>
                    <li className="list-group-item"><b>Type : </b>{currentCamera.type}</li>
                    <li className="list-group-item"><b>Colour : </b>{currentCamera.colour}</li>
                    <li className="list-group-item"><b>Amount : </b>{currentCamera.price}</li>
                    <li className="list-group-item">{currentCamera.listType}</li>
                </ul>
            </div>
        </div>
    );
};

export default CameraInfo;
