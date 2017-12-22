import {createStore} from 'redux'

import {modalReducer} from './reducers/index';



export default createStore(modalReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
