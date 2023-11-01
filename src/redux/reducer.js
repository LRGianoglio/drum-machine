import { CHANGE_VOLUME, POWER_SWITCH, BANK_SWITCH, BUTTON_PRESS } from "./types"

const initialState = {
  lastPlayed: "S T A R T",
  volume: 50,
  power: true,
  bank: false
}

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_VOLUME:
      return {...state, volume: action.payload, lastPlayed: `Volume: ${state.volume}`}
    case POWER_SWITCH:
      return {...state, power: !state.power, lastPlayed: "S T A R T"}
    case BANK_SWITCH:
      return {...state, power: !state.bank}
    case BUTTON_PRESS:
      return {...state, lastPlayed: action.payload}
    default:
      return {...state}
  }
}

export default rootReducer;