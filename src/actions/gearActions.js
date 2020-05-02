import {GET_GEAR, CURRENT_GEAR} from "./types";
import {gears} from "../Constants/data";

export const getGears = () => dispatch => {
    dispatch({type: GET_GEAR, payload: gears})
}
export const getGear = (id) => dispatch => {
    const data = gears.find((o => o.id = id))
    dispatch({type: CURRENT_GEAR, payload: data})
}
