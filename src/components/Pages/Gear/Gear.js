import React from 'react';
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {getGears} from '../../../actions/gearActions';
import Image from '../../../Helpers/Image'
import {createBrowserHistory} from "history";

const history = createBrowserHistory()

const Gear = () => {
    const {initialGear, gears} = useSelector(state => state.gears);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (!initialGear) {
            dispatch(getGears());
        }
    }, [dispatch, initialGear]);
    return (
        <div>
            {gears.map((gear, i) => (<div className="card" key={i}>
                <Image src={gear.url} className="card-img-top" alt="camera" height={"200"}/>
                <div className="card-body">
                    <h5 className="card-title">{gear.title}</h5>
                    <p className="card-text">{gear.desc}</p>
                    <a href="#" className="btn btn-primary" onClick={() => history.push(`/gear/${gear.id}`)}>Buy</a>
                </div>
            </div>))}
        </div>
    );
};

export default Gear;
