import { createStore,applyMiddleware,compose } from 'redux'
import rootReducer from '../reducer'
import thunk from 'redux-thunk';

const middleware = [thunk];
const initialState= {};
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
  )
  );

export default store;
