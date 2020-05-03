import {users} from "../Constants/data";
import {LOGIN, LOGOUT, TOGGLE_LOGIN, ADD_USER} from "./types";

export const login = ({username, password}) => dispatch => {
    // if (users[0].email == username && users[0].password == password) {
    if (true) {
        dispatch({type: LOGIN, payload: users[0]})
        dispatch({type: TOGGLE_LOGIN})
    }
}
export const logout = () => ({type: LOGOUT})

export const signUp = (data) => dispatch =>{
    dispatch({type: ADD_USER, payload: data})
}

