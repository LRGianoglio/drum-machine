import { CHANGE_VOLUME, POWER_SWITCH, BANK_SWITCH } from "./types"

const changeVolume = (volume) => {
 return (dispatch) => {
    dispatch({type: CHANGE_VOLUME, payload: volume})
 }
}

const switchBank = () => {
    return (dispatch) => {
        dispatch({type: BANK_SWITCH})
    }
}

const switchPower = () => {
    return (dispatch) => {
        dispatch({type: POWER_SWITCH})
    }
}

export {
    changeVolume,
    switchBank,
    switchPower,
}