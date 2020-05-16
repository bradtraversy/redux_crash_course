import React from 'react';
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from '../../../actions/postActions';
import Image from '../../../Helpers/Image'
import {createBrowserHistory} from "history";

const history = createBrowserHistory()
const Gear = () => {
    const {initialPost, posts} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (!initialPost) {
            dispatch(fetchPosts());
        }
    }, [dispatch, initialPost]);
    return (
        <div className="container">
            {posts.map((post) => (
                <div id="blog" className="row">
                    <div className="col-md-10 blogShort">
                        <h1>{post.title}</h1>
                        <img src={post.url}
                             alt="post img" className="pull-left img-responsive thumb margin10 img-thumbnail"/>
                        <em>This snippet use <a href="http://bootsnipp.com/snippets/featured/sexy-sidebar-navigation"
                                                target="_blank">Sexy Sidebar Navigation</a></em>
                        <article><p>
                            {post.desc}
                        </p></article>
                        <a className="btn btn-blog pull-right marginBottom10"
                           href="#" onClick={()=>history.push(`/blog/${post.id}`)}>READ MORE</a>
                    </div>
                    <div className="col-md-12 gap10"></div>
                </div>
            ))}
        </div>
    );
};

export default Gear;
