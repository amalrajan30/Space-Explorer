import { GET_IMG } from '../action/action-type'

const initialState= {
  img: []
}

export const imgDataReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_IMG:
      return {
        ...state,
        img: action.payload
      }
    default:
      return state;
  }
}