import { CHANGE_VOLUME, POWER_SWITCH, BANK_SWITCH, BUTTON_PRESS } from "./types"

const buttonPress = (text) => {
    return (dispatch) => {
        dispatch({type: BUTTON_PRESS, payload: text})
    }
}

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
    buttonPress,
    changeVolume,
    switchBank,
    switchPower,
}