import React from 'react';
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {getPost} from '../../../actions/postActions';
import Image from '../../../Helpers/Image'
import {useParams} from 'react-router-dom';

const BlogInfo = () => {
    const {currentPost} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const {id} = useParams();
    React.useEffect(() => {
        dispatch(getPost(id));
    }, [dispatch, currentPost]);
    return (
        <div className="row">
            <div className="col-md-8">
                <Image src={currentPost.url} width={900}/>
            </div>
            <div className="col-md-4">
                <ul className="list-group">
                    <li className="list-group-item"><b>Title : </b>{currentPost.title}</li>
                    <li className="list-group-item"><b>Desc : </b>{currentPost.desc}</li>
                    <li className="list-group-item"><b>Brand : </b>{currentPost.brand}</li>
                    <li className="list-group-item"><b>Model : </b>{currentPost.model}</li>
                    <li className="list-group-item"><b>Type : </b>{currentPost.type}</li>
                    <li className="list-group-item"><b>Colour : </b>{currentPost.colour}</li>
                    <li className="list-group-item"><b>Amount : </b>{currentPost.price}</li>
                    <li className="list-group-item">{currentPost.listType}</li>
                </ul>
            </div>
        </div>
    );
};

export default BlogInfo;
