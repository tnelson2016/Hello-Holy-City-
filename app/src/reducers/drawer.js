import { TOGGLE_DRAWER } from '../constants'

function drawer(state = { open: false }, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return { open: !state.open }
    default:
      return state
  }
}

export default drawer
