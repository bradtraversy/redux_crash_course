import React from 'react';
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {getGear} from '../../../actions/gearActions';
import Image from '../../../Helpers/Image'
import {useParams} from 'react-router-dom';

const GearInfo = () => {
    const {currentGear} = useSelector(state => state.gears);
    const dispatch = useDispatch();
    const {id} = useParams();
    React.useEffect(() => {
            dispatch(getGear(id));
    }, [dispatch, currentGear]);
    return (
        <div className="row">
            <div className="col-md-8">
                <Image src={currentGear.url} width={900}/>
            </div>
            <div className="col-md-4">
                <ul className="list-group">
                    <li className="list-group-item"><b>Title : </b>{currentGear.title}</li>
                    <li className="list-group-item"><b>Desc : </b>{currentGear.desc}</li>
                    <li className="list-group-item"><b>Brand : </b>{currentGear.brand}</li>
                    <li className="list-group-item"><b>Model : </b>{currentGear.model}</li>
                    <li className="list-group-item"><b>Type : </b>{currentGear.type}</li>
                    <li className="list-group-item"><b>Colour : </b>{currentGear.colour}</li>
                    <li className="list-group-item"><b>Amount : </b>{currentGear.price}</li>
                    <li className="list-group-item">{currentGear.listType}</li>
                </ul>
            </div>
        </div>
    );
};

export default GearInfo;
