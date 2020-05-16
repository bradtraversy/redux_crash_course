import {GET_PHOTO} from "./types";
import {IMAGES} from "../Constants/data";

export const getImages = () => dispatch => {
    dispatch({type: GET_PHOTO, payload: IMAGES})
}
