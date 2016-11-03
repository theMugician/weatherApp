import { SWITCH_TEMP_UNITS } from '../actions/index';

const initialState = {
   temp_unit: 'C'
}

export default function(state = initialState, action) {
  switch (action.type) {
      case SWITCH_TEMP_UNITS:
        return action.payload;
      }

  return state;
}