import {createStore} from 'redux'

import {tripReducer} from './reducers';

export default createStore(tripReducer);
