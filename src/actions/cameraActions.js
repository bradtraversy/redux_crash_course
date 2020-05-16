import {GET_CAMERA, CURRENT_CAMERA} from "./types";
import {cameras} from '../Constants/data'

export const getCameras = () => dispatch => {
    dispatch({type: GET_CAMERA, payload: cameras})
}
export const getCamera = (id) => dispatch => {
    const data = cameras.find((o => o.id = id))
    dispatch({type: CURRENT_CAMERA, payload: data})
}
