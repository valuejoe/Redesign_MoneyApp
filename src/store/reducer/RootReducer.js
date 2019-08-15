import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers'
const rootReducer = combineReducers({
    auth: AuthReducers
})

export default rootReducer