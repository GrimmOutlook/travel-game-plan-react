import tripReducer from './trip-reducer';
import modalReducer from './modal-reducer';
import itemReducer from './item-reducer';
import authReducer from './auth';
import protectedDataReducer from './protected-data';

import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    protectedData: protectedDataReducer,
    trip: tripReducer,
    modal: modalReducer,
    item: itemReducer
});

export default rootReducer;

