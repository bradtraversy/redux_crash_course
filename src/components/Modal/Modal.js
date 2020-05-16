import React from 'react';
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Upload from "./Upload/Upload";
function Modal(props) {
    return (
        <div>
            <Login/>
            <SignUp/>
            <Upload/>
        </div>
    );
}

export default Modal;
