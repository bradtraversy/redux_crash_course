import {GET_USER, CURRENT_USER} from "./types";
import {users} from "../Constants/data";

export const getUsers = () => dispatch => {
    dispatch({type: GET_USER, payload: users})
}
export const getUser = (id) => dispatch =>{
    const data = users.find((o => o.id == id))
    dispatch({type:CURRENT_USER,payload:data})
}
