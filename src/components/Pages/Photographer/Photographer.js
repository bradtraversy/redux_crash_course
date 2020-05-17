import React from 'react';
import './styles.scss'
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../../../actions/userActions';
import Image from '../../../Helpers/Image'
import { createBrowserHistory } from "history";

const history = createBrowserHistory()
const Gear = () => {
    const { initialUser, users } = useSelector(state => state.users);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (!initialUser) {
            dispatch(getUsers());
        }
    }, [dispatch, initialUser]);
    return (

        <section className="card-listing-wrap">
            <div className={"row"}>
                {users.map((user, i) => (
                    <div className="listing-card" key={i}>
                        <div className="card" >
                            <Image src={user.photo} className="card-img-top" alt="camera"  />
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.location},{user.country}</p>
                                <a href="#" onClick={() => history.push(`/photographer/${user.id}`)} className="btn btn-primary">Contact</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gear;
