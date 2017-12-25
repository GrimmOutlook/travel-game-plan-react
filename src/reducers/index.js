import {CREATE_NEW_TRIP} from '../actions/index'
import tripReducer from './trip-reducer'
import modalReducer from './modal-reducer'
import {reducer as formReducer} from 'redux-form'
import {combineReducers} from 'redux'






export default combineReducers({form: formReducer, trip: tripReducer, modal: modalReducer})
