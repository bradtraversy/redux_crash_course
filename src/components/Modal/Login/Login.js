import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Modal} from "react-bootstrap";
import {TOGGLE_LOGIN} from '../../../actions/types';
import {login} from "../../../actions/authActions";

function Login() {
    const [state, setState] = useState({username: '', password: ''})
    const {isLogin} = useSelector(state => state.modal)
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch({type: TOGGLE_LOGIN})
    }
    const handleChange = (evt) =>{
        setState({
            ...state,
            [evt.target.name]:evt.target.value
        })
    }
    const makeLogin = () =>{
        dispatch(login(state))
    }
    return (
        <div>
            <Modal show={isLogin} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" name={"username"} id="exampleInputEmail1" value={state.username}
                                   aria-describedby="emailHelp" onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" name={"password"}id="exampleInputPassword1"
                                   value={state.password} onChange={handleChange}/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember</label>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>makeLogin()}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Login;
