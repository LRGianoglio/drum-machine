import { CHANGE_VOLUME, POWER_SWITCH, BANK_SWITCH } from "./types"

const initialState = {
  lastPlayed: "placeholder",
  volume: 50,
  power: true,
  bank: false
}

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_VOLUME:
      return {...state, volume: action.payload}
    case POWER_SWITCH:
      return {...state, power: !state.power}
    case BANK_SWITCH:
      return {...state, power: !state.bank}
    default:
      return {...state}
  }
}

export default rootReducer;