import React from 'react';
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {getUser} from '../../../actions/userActions';
import Image from '../../../Helpers/Image'
import {useParams} from 'react-router-dom';

const PhotographerInfo = () => {
    const {currentUser} = useSelector(state => state.users);
    const dispatch = useDispatch();
    const {id} = useParams();
    React.useEffect(() => {
        dispatch(getUser(id));
    }, [dispatch, currentUser]);
    return (
        <div className="row">
            <div className="col-md-8">
                <Image src={currentUser.photo} width={500}/>
            </div>
            <div className="col-md-4">
                <ul className="list-group">
                    <li className="list-group-item"><b>Title : </b>{currentUser.name}</li>
                    <li className="list-group-item"><b>Desc : </b>{currentUser.mobile}</li>
                    <li className="list-group-item"><b>Brand : </b>{currentUser.country}</li>
                    <li className="list-group-item"><b>Model : </b>{currentUser.location}</li>
                    <li className="list-group-item"><b>Type : </b>{currentUser.email}</li>
                    <li className="list-group-item"><b>Colour : </b>{currentUser.Gender}</li>
                    <li className="list-group-item"><b>Amount : </b>{currentUser.DOB}</li>
                    <li className="list-group-item">{currentUser.listType}</li>
                </ul>
            </div>
        </div>
    );
};

export default PhotographerInfo;
