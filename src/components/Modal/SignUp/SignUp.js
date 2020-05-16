import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Modal} from "react-bootstrap";
import {TOGGLE_SIGNUP} from '../../../actions/types';
import {isRequired, isEmail, isPassword, isMatch} from '../../../Helpers/Validators'
import {signUp} from "../../../actions/authActions";

function SignUp() {
    const [state, setState] = useState({
        email: '',
        password: '',
        name: '',
        confirm: '',
        isemail: '',
        ispassword: '',
        isname: '',
        isconfirm: ''
    })
    const {issignUp} = useSelector(state => state.modal)
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch({type: TOGGLE_SIGNUP})
    }
    const handleChange = (evt) => {
        setState({
            ...state,
            [evt.target.name]: evt.target.value,
            ['is' + evt.target.name]: isRequired(evt.target.value)
        })
    }
    const validate = () => {
        const isname = isRequired(state.name);
        const isemail = isEmail(state.email);
        const ispassword = isPassword(state.password);
        const isconfirm = isMatch(state.confirm,state.password);
        setState({...state, isname, isemail, ispassword, isconfirm});
        return isname === '' && isemail === '' && isconfirm === '' && ispassword === '';
    }
    const makeSignUp = () => {
        const data = {email: state.email, password: state.password, name: state.name}
        if (validate()) {
            dispatch(signUp(data))
        }
    }
    return (
        <Modal show={issignUp} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>SignUp</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className={`form-control ${state.isname ? "is-invalid" : ""}`} name={"name"}
                               id="exampleInputEmail1"
                               value={state.name}
                               aria-describedby="emailHelp" onChange={handleChange}/>
                        <div className="invalid-feedback">
                            {state.isname}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Email</label>
                        <input type="email" className={`form-control ${state.isemail ? "is-invalid" : ""}`}
                               name={"email"} id="exampleInputPassword1"
                               value={state.email} onChange={handleChange}/>
                        <div className="invalid-feedback">
                            {state.isemail}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input type="password" className={`form-control ${state.ispassword ? "is-invalid" : ""}`}
                               name={"password"} id="exampleInputEmail1"
                               value={state.password}
                               aria-describedby="emailHelp" onChange={handleChange}/>
                        <div className="invalid-feedback">
                            {state.ispassword}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                        <input type="password" className={`form-control ${state.isconfirm ? "is-invalid" : ""}`}
                               name={"confirm"} id="exampleInputPassword1"
                               value={state.confirm} onChange={handleChange}/>
                        <div className="invalid-feedback">
                            {state.isconfirm}
                        </div>
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
                <Button variant="primary" onClick={()=>makeSignUp()}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SignUp;
