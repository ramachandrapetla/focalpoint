import { createStore} from 'redux'
import authentication from './Reducers/authentication'

const store = createStore(authentication, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;