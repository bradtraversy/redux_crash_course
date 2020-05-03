import React from 'react';
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {getCameras} from '../../../actions/cameraActions';
import Image from '../../../Helpers/Image'
import {createBrowserHistory} from "history";

const history = createBrowserHistory()
const Camera = () => {
    const {initialCamera, cameras} = useSelector(state => state.cameras);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (!initialCamera) {
            dispatch(getCameras());
        }
    }, [dispatch, initialCamera]);
    return (
        <div>
            {cameras.map((camera, i) => (<div className="card" key={i}>
                <Image src={camera.url} className="card-img-top" alt="camera" />
                <div className="card-body">
                    <h5 className="card-title">{camera.title}</h5>
                    <p className="card-text">{camera.desc}</p>
                    <a href="#" onClick={()=>history.push(`/camera/${camera.id}`)} className="btn btn-primary">Buy</a>
                </div>
            </div>))}
        </div>
    );
};

export default Camera;
