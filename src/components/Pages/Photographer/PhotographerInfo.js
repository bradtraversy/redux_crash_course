import React from 'react';
import './styles.scss'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../../../actions/userActions';
import Image from '../../../Helpers/Image'
import { useParams } from 'react-router-dom';

const PhotographerInfo = () => {
    const { currentUser } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const { id } = useParams();
    React.useEffect(() => {
        dispatch(getUser(id));
    }, [dispatch, currentUser]);
    return (


   
        <div>
            <section className="coverImage">
                <img src="/assets/images/portalicons/cover.svg" className="img-fluid" />
                <div className="mainprofileWrap">
                    <div className="profilePicture">
                        <img src={currentUser.photo} class="img-fluid" />
                    </div>
                </div>
            </section>
       

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
