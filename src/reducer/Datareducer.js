import {GET_DATA} from '../action/action-type'

const initialState= {
  items: []
}

export const dataReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}