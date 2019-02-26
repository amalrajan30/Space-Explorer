import {combineReducers} from 'redux'
import {dataReducer} from './Datareducer'
import { imgDataReducer } from './ImgDataReducer'

export default combineReducers({
  data: dataReducer,
  imageData: imgDataReducer
});