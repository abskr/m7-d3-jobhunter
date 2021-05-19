import { createStore } from 'redux'
import mainReducers from '../reducers/index.js'

export const initialState = {
  fav: {
    jobs: []
  },
  user: {
    username: null,
  }
}

export default function configStore() {
  return createStore(
    mainReducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}